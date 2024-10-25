const fs = require("fs");
module.exports.config = {
  name: "ripley",
  version: "2.0.1",
  permission: 0,
  credits: "Robiul",
  description: "noprefix",
  prefix: false,
  category: "user",
  usages: "",
  cooldowns: 5,
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("love")
react.includes("jan") || 
react.includes("sona") ||
react.includes("love") ||
react.includes("babu") ||
react.includes("jano") || 
react.includes("kiss") || 
react.includes("xuna") ||
 {
		var msg = {
				body: "- প্রেম ভালোবাসা বলতে কিছু নেই এইসব প্রেম না খাওয়ার ধান্দা-!!😼"
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😾", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
