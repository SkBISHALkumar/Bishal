module.exports.config = {
  name: "leave",
  eventType: ["log:unsubscribe"],
  version: "1.0.0",
  credits: "Nayan",
  description: "notify leave.",
};

module.exports.run = async function({ api, event, Users, Threads }) {
  if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
  const { createReadStream, existsSync, mkdirSync } = global.nodemodule["fs-extra"];
  const { join } = global.nodemodule["path"];
  const { threadID } = event;
  const data = global.data.threadData.get(parseInt(threadID)) || (await Threads.getData(threadID)).data;
  const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
  const type = (event.author == event.logMessageData.leftParticipantFbId) ? "পালাইছে রে পালাইছে 😹 পালিয়ে কোথায় যাবি থাপ্পর চিনো তুই☹️😡 🥱দারা তোরে আবার এট দিবো 🤨" : "বাল পাকনামির কারণে কিক খাইলো🤧";
  const path = join(__dirname, "Nayan", "leaveGif");
  const gifPath = join(path, `Messenger_creation_D9B5E5F7-A4E1-4870-A8E2-D500072CFFF6.mp4`);
  let msg, formPush;

  if (existsSync(path)) mkdirSync(path, { recursive: true });

  typeof data.customLeave === "undefined" ? (msg = "ইস {name} {type} 🤖.") : (msg = data.customLeave);
  msg = msg.replace(/\{name}/g, name).replace(/\{type}/g, type);

  if (existsSync(gifPath)) {
    formPush = { body: msg, attachment: createReadStream(gifPath) };
  } else {
    formPush = { body: msg };
  }

  return api.sendMessage(formPush, threadID);
};
