const context = require("../context");
const firebase = require("../dbs/firebase")


async function getChannels(hash, token) {
  const channelUrl = `https://api.bigcommerce.com/stores/${hash}/v3/channels`;

  const channelOptions = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-Auth-Token': token
    }
  };

  try {
    const response = await fetch(channelUrl, channelOptions);
    const json = await response.json();
    const activeChannels = json.data.filter(channel => channel.status === 'active');
    return activeChannels;
  } catch (err) {
    console.error('Error:', err);
    throw err; // Rethrow the error so it can be handled by the caller
  }
}

async function createScript(firebaseData) {
  const {accessToken, storeHash} = firebaseData;

  console.log("======= context data =======");
  console.log(context.data);

  let url = `https://api.bigcommerce.com/stores/${storeHash}/v3/content/scripts`;

  const channels = await getChannels(hash, token);
  console.log(channels, "Channels");

  let scriptUuid = [];

  channels?.forEach(ele => {
    const channelId = ele.id;

    let options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-Auth-Token": accessToken,
      },
      body: `{"name":"PayU Script","description":"Handle Payment using PayU","html": "<script src=\'https://cdn.shopify.com/s/files/1/0604/7648/9904/files/bigcommerce_razorpay_checkout_button.js?v=1717057420'></script>","src":"","auto_uninstall":true,"load_method":"default","location":"footer","visibility":"checkout","kind":"script_tag","channel_id":${channelId},"consent_category":"essential"}`,
    };
  
    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        context.set("uuid", json.data.uuid);
        console.log(json, "uuid");
        // firebaseData.uuid = json.data.uuid;
        // firebase.setStore(firebaseData);
        let channelUuid = { name: "Alice", uuid: json.data.uuid };
      })
      .catch((err) => console.error("error:" + err));
  });

}

function deleteScript() {
  const hash = context.get("store_hash");
  const token = context.get("token");
  const uuid = context.get("uuid");

  console.log("======= context data =======");
  console.log(context.data);

  let url = `https://api.bigcommerce.com/stores/${hash}/v3/content/scripts/${uuid}`;

  let options = {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-Auth-Token": token,
    },
  };

  fetch(url, options)
    .then((res) => res.json())
    .then((json) => {
      console.log("======= deleting script =======");
      console.log(json);
    })
    .catch((err) => console.error("error:" + err));
}

async function checkScripts(storeHash) {
  firebase.getStore(storeHash);
  const hash = context.get("store_hash");
  const token = context.get("token");
  const channelId = context.get("channel_id");

  // console.log("======= context data checkscript =======");
  // console.log(context.data);

  const channels = await getChannels(hash, token);
  console.log(channels, "Channels");


  if (context.data) {
    let url = `https://api.bigcommerce.com/stores/${hash}/v3/content/scripts?channel_id:in=${channelId}`;

    let options = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-Auth-Token": token,
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        let data = json.data;

        if (data?.length) {
          const uuid = context.get("uuid");

          const uuidExists = data.some((item) => item.uuid === uuid);

          //check if app installed script exists.
          if (!uuidExists) {
            createScript();
          } else {
            console.log("Script exists..");
          }
        } else {
          createScript();
        }
      })
      .catch((err) => console.error("error:" + err));
  }
}

module.exports = { createScript, deleteScript, checkScripts };
