import { Panel, Box, Button, Tooltip, Text, Flex, FlexItem } from '@bigcommerce/big-design';
import React, { useEffect, useState } from 'react';
import ErrorMessage from '../components/error';
import Loading from '../components/loading';
import { alertsManager } from './_app';
import { useQuery } from '../context/session';


const handleButtonClick = async (item, setLoadingStates, loadingStates, setChannel, inject) => {
  setLoadingStates({ ...loadingStates, [item._id]: true });

  //initial alert popup with null value
  let alertId = null;
  let url = ''; //API Url
  const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiMWFmMDVkNGMtMjdjNS00ZjYwLWE5YzEtNDdjZGE0MmZjZjE0IiwiaWF0IjoxNzE4NzczODkwLCJleHAiOjE3MTg4NjAyOTB9.AinncUlUKI4aMhirBjRd5f650PRziHZvVDyTcztFhms';
  let requestOptions; //Authentication token
  const channelId = item.channelId //Chanel Id
  console.log(item.channelId);


  try {
    //Inject Script
    if (inject) {
      url = 'https://payu.in.ngrok.io/api/channel/inject';

      requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'authorization': authToken
        },
        body: JSON.stringify({ channel_id: channelId }),
      };
    } else {
      //Eject Script
      url = 'https://payu.in.ngrok.io/api/channel/eject';

      requestOptions = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'authorization': authToken
        },
        body: JSON.stringify({ channel_id: channelId }),
      };
    }

    console.log(url, requestOptions);

    const response = await fetch(url, requestOptions);

    if (!response.ok) {
      throw new Error('Network response was not ok: ' + response.statusText);
    }

    const result = await response.json();
    setChannel(result.data);
    console.log(result.data, 'data');

    // Update the alert type to success on successful response
    alertId = alertsManager.add({
      messages: [{ text: item.injectedAt != null ? `Script is ejecting from ${item.channelName}` : `Script is injecting to ${item.channelName}` }],
      type: 'success', // Initially set to loading
      onClose: () => null,
    });

  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);

    // Update the alert type to error on failure
    alertId = alertsManager.add({
      messages: [{ text: 'There was a problem with your request.' }],
      type: 'error',
      onClose: () => null,
    });

    //remove alert manager after 2 seconds
    setTimeout(() => {
      alertsManager.remove(alertId);
    }, 2000);

  } finally {
    //remove button loading
    setLoadingStates({ ...loadingStates, [item._id]: false });

    //remove alert manager after 2 seconds
    setTimeout(() => {
      alertsManager.remove(alertId);
    }, 2000);
  }
};


export default function Index() {
  const [Channel, setChannel] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [loadingStates, setLoadingStates] = useState({});
  const [Token, setToken] = useState(null);
  const searchParams = useQuery();


  const getChannelList = async () => {
    setLoading(true);
    setError(null);
    console.log(Token);


    try {
      let url = 'https://payu.in.ngrok.io/api/channel/list';

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiMWFmMDVkNGMtMjdjNS00ZjYwLWE5YzEtNDdjZGE0MmZjZjE0IiwiaWF0IjoxNzE4NzczODkwLCJleHAiOjE3MTg4NjAyOTB9.AinncUlUKI4aMhirBjRd5f650PRziHZvVDyTcztFhms'
        }
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setChannel(result.data); // Store data in state
      console.log(result, "result");
    } catch (error) {
      setError(error.message);
      setLoading(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getChannelList();
  }, []);


  // const [Token, setToken] = useState(null);
  // const searchParams = useQuery();

  // useEffect(() => {
  //   const token = searchParams;
  //   if (toke) {
  //     setToken(searchParams[1]);
  //     getChannelList();
  //     return;
  //   }
  // }, [searchParams]);


  if (loading) return <Loading />;
  if (error) return (
    <Panel margin="xxLarge">
      <ErrorMessage error={error} />
      <Button actionType="normal" isLoading={loading} variant="primary" onClick={() => getChannelList()}>Reload</Button>
    </Panel>
  );

  return (
    <Panel margin="xxxLarge">
      <Box>
        {Channel.length > 0 && (
          <>
            {Channel.map((item) => (
              <Box
                backgroundColor="secondary20"
                border="box"
                borderRadius="normal"
                padding="small"
                marginBottom="medium"
                key={item._id}
              >
                <Flex justifyContent="space-between" alignItems="center">
                  <FlexItem><Text bold>{item.channelName}</Text></FlexItem>
                  <FlexItem>
                    {item.isEnabled ? (
                      item.injectedAt != null ? (
                        <Button
                          marginLeft="medium"
                          actionType="destructive"
                          isLoading={loadingStates[item._id] || false}
                          onClick={() => handleButtonClick(item, setLoadingStates, loadingStates, setChannel, false)}
                        >
                          Eject
                        </Button>
                      ) : (
                        <Button
                          marginLeft="medium"
                          actionType="normal"
                          isLoading={loadingStates[item._id] || false}
                          onClick={() => handleButtonClick(item, setLoadingStates, loadingStates, setChannel, true)}
                        >
                          Inject
                        </Button>
                      )
                    ) : (
                      <Tooltip placement="right" trigger={<button className='disabled'>Disabled</button>}>
                        This channel is not active
                      </Tooltip>
                    )}
                  </FlexItem>
                </Flex>
              </Box>
            ))}
          </>
        )}
      </Box>
    </Panel>
  );
}

