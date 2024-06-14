import { Panel, Box, Button, Tooltip, Text, Flex, FlexItem} from '@bigcommerce/big-design';
import React, { useEffect, useState } from 'react';
import ErrorMessage from '../components/error';
import { alertsManager } from './_app';

const handleButtonClick = async (item, setLoadingStates, loadingStates, e) => {

  console.log(item, e);

  setLoadingStates({ ...loadingStates, [item._id]: true });

  //show alert popup when script injected and ejected from channels 
  const alertId = alertsManager.add({
    messages: [{ text: item.uuid ? `Script is ejected from ${item.name}` : `Script is injected to ${item.name}` }],
    type: 'error',
    onClose: () => null
  });

  // Remove the alert after 2 seconds
  setTimeout(() => {
    setLoadingStates({ ...loadingStates, [item._id]: false });
    alertsManager.remove(alertId);
  }, 2000);

};

export default function Index() {
  const [Channel, setChannel] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [loadingStates, setLoadingStates] = useState({});

  const data = [
    {
      "_id": "66689410213783aab5d0fed9",
      "channelId": 1,
      "name": "Marmeto IN",
      "__v": 0,
      "createdAt": "2024-06-11T18:14:40.494Z",
      "domain": "https://marmetotest1.mybigcommerce.com",
      "ejectedAt": null,
      "injectedAt": null,
      "isEnabled": true,
      "updatedAt": "2024-06-11T18:14:40.494Z",
      "uuid": "1af05d4c-27c5-4f60-a9c1-47cda42fcf14"
    },
    {
      "_id": "66689410213783aab5d0ff13",
      "channelId": 1588903,
      "name": "Marmeto US",
      "__v": 0,
      "createdAt": "2024-06-11T18:14:40.608Z",
      "domain": "https://test1-1588903.mybigcommerce.com",
      "ejectedAt": null,
      "injectedAt": null,
      "isEnabled": false,
      "updatedAt": "2024-06-11T18:14:40.608Z",
      "uuid": "1af05d4c-27c5-4f60-a9c1-47cda42fcf14"
    },
    {
      "_id": "66689410213783aab5d0ff14",
      "channelId": 1588904,
      "name": "Marmeto AU",
      "__v": 0,
      "createdAt": "2024-06-11T18:14:40.608Z",
      "domain": "https://test1-1588903.mybigcommerce.com",
      "ejectedAt": null,
      "injectedAt": null,
      "isEnabled": true,
      "updatedAt": "2024-06-11T18:14:40.608Z"
    },
    {
      "_id": "66689410213783aab5d0ff15",
      "channelId": 1588905,
      "name": "Marmeto CN",
      "__v": 0,
      "createdAt": "2024-06-11T18:14:40.608Z",
      "domain": "https://test1-1588903.mybigcommerce.com",
      "ejectedAt": null,
      "injectedAt": null,
      "isEnabled": true,
      "updatedAt": "2024-06-11T18:14:40.608Z"
    },
    {
      "_id": "66689410213783aab5d0ff16",
      "channelId": 1588906,
      "name": "Marmeto SG",
      "__v": 0,
      "createdAt": "2024-06-11T18:14:40.608Z",
      "domain": "https://test1-1588903.mybigcommerce.com",
      "ejectedAt": null,
      "injectedAt": null,
      "isEnabled": false,
      "updatedAt": "2024-06-11T18:14:40.608Z"
    }
  ];

  const getChannelList = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://randomuser.me/api/');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setChannel(data); // Store data in state
      console.log(Channel, "Channels", Channel.length);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getChannelList();
  }, [])

  if (error) return <ErrorMessage error={error} />;

  return (
    <Panel margin="xxxLarge">
      <Box>
        {/* <Button actionType="normal" isLoading={loading} variant="primary" onClick={getChannelList}>
          Authenticate
        </Button> */}
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
                  <FlexItem><Text>{item.name}</Text></FlexItem>
                  <FlexItem>
                    {item.isEnabled ? (
                      item.uuid ? (
                        <Button
                          marginLeft="medium"
                          actionType="destructive"
                          isLoading={loadingStates[item._id] || false}
                          onClick={(e) => handleButtonClick(item, setLoadingStates, loadingStates, e)}
                        >
                          Eject
                        </Button>
                      ) : (
                        <Button
                          marginLeft="medium"
                          actionType="normal"
                          isLoading={loadingStates[item._id] || false}
                          onClick={(e) => handleButtonClick(item, setLoadingStates, loadingStates, e)}
                        >
                          Inject
                        </Button>
                      )
                    ) : (
                      <Tooltip placement="right" trigger={<Button marginLeft="medium" variant="secondary">Disabled</Button>}>
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



// async function makePostRequest(url, data) {
//   try {
//     const response = await fetch(url, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(data)
//     });
//     if (!response.ok) {
//       throw new Error('Network response was not ok' + response.statusText);
//     }
//     const responseData = await response.json();
//     console.log(responseData);
//   } catch (error) {
//     console.error('There has been a problem with your fetch operation:', error);
//   }
// }
