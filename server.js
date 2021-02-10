
const express = require("express");
const app = express();
const dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];
app.use(express.static("public"));
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});
app.get("/dreams", (request, response) => {
  response.json(dreams);
});
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});




const Discord = require ("discord.js")
const moment = require ("moment")
const client = new Discord.Client();
const prefix = "j!";


client.login("");
client.on("ready", async () => {
  console.log(`Logged in as ${client.user.username}!`);
  client.user.setStatus("ONLINE");
  client.user.setActivity(`${prefix}help`, { type: "WATCHING" });
  client.guilds.cache.forEach(g => {
    if (g.member(client.user).hasPermission("ADMINISTRATOR")) {
      g.fetchInvites().then(guildInvites => {});
    }
  });
});

//////////

client.on("message", message => {
if (message.content === prefix +"help") {
const embed = new Discord.MessageEmbed()
.setColor("BLACK")
.setDescription(` 
 **Admin
 
j!server| j!user | j!say | j!U | j!avatar | j!ping | j!support | j!invite | j!bot |**

**Moderation 

j!clear | j!ban |  j!kick | j!lock | j!unlock | j!mute | j!unmute | j!slowmode |**


**use onle owner ship or administrator or MENTION_EVERYONE send [@everyone]**

**anti link use onle owner ship ord administrator or manage emoji send [anti partner]**


**[ invite ]**
**[ click here ](https://discord.com/api/oauth2/authorize?client_id=799228179784794183&permissions=8&scope=bot)** 
**[ support ]**
**[ click here ](https://discord.gg/3wykSpqjZq)**
 `)
    
    .setFooter(` System bot ✨ | Coded by , JANO`, client.user.avatarURL)
    .setURL("https://discord.gg/3wykSpqjZq")
      
    message.channel.send(embed);
      message.react("<a:jano_27:799630916820795422>");
  }
});
//////////////





/////////////////////
client.on("message", message => {
  if (message.content === prefix + "bot") {
    const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
    
      .addField("`my name`", `** ${client.user.tag} **`, true)
    
     .addField("`My ID`",  `**799228179784794183**`, true)

      .addField("`Server`", `**${client.guilds.cache.size} Server**`, true)
    
     .addField("`Usres`",  `**${client.users.cache.size}  Users**`, true)
    
     .addField( "`My Prefix` ",`**j!**`,true)
    
     .addField("`Node.js Version`",  `**12**`, true)
    
    .addField("`Language Program`",  `**Java Script**`, true)
    
    .addField("`Discord.js `",  `**12.5.1**`, true)
    
    
     .addField( "`developer bot` ",`<a:jano_25:799630801032708158> <@681553671364018196> <a:jano_25:799630801032708158>`,true)

      .setImage(
        "https://cdn.discordapp.com/attachments/696796419595567108/741981480653291570/image0-40.gif"
      );
    message.channel.send(embed);
    message.react("<a:jano_27:799630916820795422>");
  }
});
////////////////////

//////////////
client.on("message", message => {
  if (message.content === prefix + "lock") {
    if (!message.channel.guild)
      return message.reply(" <a:jano_23:799630647513317387>** ئـەم ئـەمـرە تـەنهـا بـۆ سـێـرڤـرە **<a:jano_23:799630647513317387>");
    
    message.react("<a:jano_27:799630916820795422>");
    
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply(
        "<a:jano_1:799271835580891148>**بـبـورە تـۆ نـاتوانـی ئـەم ڪارە بڪەیت ئەم ڕۆڵـەت نییە **<a:jano_1:799271835580891148>"
      );
    message.channel
      .updateOverwrite(message.guild.id, {
        SEND_MESSAGES: false
      })
      .then(() => {
        message.reply("<a:jano_22:799629878764634132>**بـەسـەر ڪـەوتوی داخـرا**<a:jano_22:799629878764634132>");
      });
  }
  if (message.content === prefix + "unlock") {
    if (!message.channel.guild)
      return message.reply("<a:jano_23:799630647513317387>** ئـەم ئـەمـرە تـەنـهـا بـۆ سـێـرڤـەرە **<a:jano_23:799630647513317387>");
  message.react("<a:jano_27:799630916820795422>");
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply(
        "<a:jano_11:799293444136108084>**بـبـورە نـاتوانـی ئـەم ڪـارە بـڪەیت ڕۆڵـت نییە**<a:jano_11:799293444136108084>"
      );
    message.channel
      .updateOverwrite(message.guild.id, {
        SEND_MESSAGES: true
      })
      .then(() => {
        message.reply("<a:jano_27:799630916820795422>**بـەسـەر ڪـەوتـوی ڪـرایـەوە**<a:jano_27:799630916820795422>");
      });
  }
});


////////


client.on("message", message => {
  if (message.content === prefix + "invite") {
    if (!message.channel.guild)
      return message.reply(
        "Please Do not type bot commands in bot private chat"
      );
    let embed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setTitle("=--><a:jano_10:799629559217389608> <a:jano_24:799630717507862558> click touch for link bot <a:jano_24:799630717507862558> <a:jano_10:799629559217389608><--=")
      .setURL(
        "https://discord.com/api/oauth2/authorize?client_id=799228179784794183&permissions=8&scope=bot"
      );
    message.channel.send(embed);
     message.react("<a:jano_27:799630916820795422>");
  }
});

///////



///////

client.on("message", message => {
  let command = message.content.split(" ")[0];
  if (command == prefix + "unban") {
    if (!message.member.hasPermission("BAN_MEMBERS")) return;
    let args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (args == "all") {
      message.guild.fetchBans().then(zg => {
        zg.forEach(Saad => {
          message.guild.unban(Saad);
        });
      });
      return message.channel.send("** Unbanned all members **<a:jano_6:799640680812773417>");
    }
    if (!args) return message.channel.send("**Please Type the member ID**<a:jano_11:799293444136108084>");
    message.guild
      .unban(args)
      .then(m => {
        message.channel.send(
          `<a:x2:669825119492767745> **-** **Done Unbanned ${m.username}**`
        );
      })
      .catch(stry => {
        message.channel.send(
          `<a:x1:669825119904071691> **-** **I can't find \`${args}\` in the ban list**`
        );
      });
  }
});

///////
////////


/////

client.on("message", message => {
  if (!message.guild) return;
  if (message.author.bot) return;
  let args = message.content.split(" ");
  let command = args[0].toLowerCase();
  if (command === prefix + "clear") {
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(
        `<a:jano_26:799630865474256972> You are missing the permission \`MANAGE MESSAGES\`.`
      );
    if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(
        `<a:jano_26:799630865474256972> I Am missing the permission \`MANAGE MESSAGES\`.`
      );
    if (!args[1]) {
      message.channel
        .bulkDelete(100)
        .then(m =>
          message.channel
            .send(`\`\`\`\nDeleted ${m.size} messages\n\`\`\``)
            .then(p => p.delete({ timeout: 3000 }))
        );
    } else {
      message.delete().then(n => {
        message.channel
          .bulkDelete(args[1])
          .then(m =>
            message.channel
              .send(`\`\`\`\nDeleted ${m.size} messages\n\`\`\``)
              .then(p => p.delete({ timeout: 3000 }))
          );
      });
    }
  }
});

////////



//////

client.on("message", message => {
  //zalm
  if (message.content.includes("discord.gg")) {
    if (!message.member.hasPermission("MANAGE_EMOJIS")) {
      message.delete();
      message.reply("```you can send partner``` <a:jano_11:799293444136108084>");
      message.react("🚫");
    }
  }
});

////////

client.on("message", storm => {
  if (storm.content.startsWith(prefix + "U")) {
    storm.guild.fetchInvites().then(invs => {
      let user = storm.mentions.users.first() || storm.author;
      let personalInvites = invs.filter(i => i.inviter.id === user.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      storm.channel.send(`${user} has ${inviteCount} invites.`);
    });
  }
});




//////////////mute

client.on("message", async message => {
  let args = message.content.split(" ");
  let user =
    message.mentions.users.first() || message.guild.members.cache.get(args[1]);
  if (message.content.startsWith(prefix + "mute")) {
    if (!message.guild.member(message.author).hasPermission("MUTE_MEMBERS"))
      return message.channel.send(
        "**Please Check Your Permission MUTE_MEBMERS **<a:jano_26:799630865474256972>"
      );
    if (!message.guild.member(client.user).hasPermission("MUTE_MEMBERS"))
      return message.channel.send(
        "**Please Check My Permission MUTE_MEBMERS **"
      );
    if (!user)
      return message.channel.send(`**>>> ${prefix}mute <@mention Or ID>**`);
    let mute = message.guild.roles.cache.find(role => role.name === "Muted");
    if (!mute)
      mute = await message.guild.roles.create({
        data: {
          name: "Muted",
          color: "#0000",
          permissions: []
        }
      });
    message.guild.channels.cache.forEach(async channel => {
      await channel.createOverwrite(mute, {
        SEND_MESSAGES: false,
        ADD_REACTIONS: false
      });
    });
    message.guild.member(user).roles.add(mute);
    message.channel.send(`**${user.username} has been muted** <a:jano_27:799630916820795422>`);
  }
  if (message.content.toLowerCase() === `${prefix}help mute`) {
    let mute = new Discord.MessageEmbed()
      .setTitle(`Command: Mute `)
      .addField("Usage", `${prefix}mute @user`)
      .addField("Information", "Mute Members");
    message.channel.send(mute);
  }
});

//////////unmute

client.on("message", async message => {
  let args = message.content.split(" ");
  let user = message.mentions.users.first();
  if (message.content.startsWith(prefix + "unmute")) {
    if (!message.guild.member(message.author).hasPermission("MUTE_MEMBERS"))
      return message.channel.send(
        "**Please Check Your Permission MUTE_MEBMERS** <a:jano_26:799630865474256972>"
      );
    if (!message.guild.member(client.user).hasPermission("MUTE_MEMBERS"))
      return message.channel.send(
        "**Please Check My Permission MUTE_MEBMERS**"
      );
    if (!user)
      return message.channel.send(`**>>> ${prefix}unmute <@mention Or ID>**`);
    let mute = message.guild.roles.cache.find(role => role.name === "Muted");
    message.guild.channels.cache.forEach(async channel => {
      await channel.createOverwrite(mute, {
        SEND_MESSAGES: false,
        ADD_REACTIONS: false
      });
    });
    message.guild.member(user).roles.remove(mute);
    message.channel.send(`**removed mute from ${user.username}** <a:jano_27:799630916820795422>`);
  }
  if (message.content.toLowerCase() === `${prefix}help unmute`) {
    let unmute = new Discord.MessageEmbed()
      .setTitle(`Command: unmute `)
      .addField("Usage", `${prefix}unmute @user`)
      .addField("Information", "unmute Members");
    message.channel.send(unmute);
  }
});

//////////



////////


////////avatar

client.on("message", async message => {
  let command = message.content.toLowerCase().split(" ")[0];
  command = command.slice(prefix.length);
  if (command == "avatar") {
    let args = message.content.split(" ");
    let user =
      message.mentions.users.first() ||
      message.author ||
      message.guild.member.cache.get(args[1]);
    message.channel.send(
      new Discord.MessageEmbed()
        .setAuthor(user.username, user.avatarURL())
        .setDescription(`**[Avatar Link](${user.avatarURL()})**`)
        .setImage(user.avatarURL({ dynamic: true, format: "png", size: 1024 }))
    );
  }
});

////////

client.on("message", msg => {
  if (msg.author.bot) return;
  if (msg.content.includes("@everyone")) {
    if (msg.member.hasPermission("MENTION_EVERYONE")) return;
    if (!msg.channel.guild) return;
    msg.delete();
    msg.reply("```You cant send everyone ```<a:jano_23:799630647513317387>");
  }
});

////////

client.on("message", msg => {
  if (msg.author.bot) return;
  if (msg.content.includes("@here")) {
    if (msg.member.hasPermission("MENTION_EVERYONE")) return;
    if (!msg.channel.guild) return;
    msg.delete();
    msg.reply("```You cant send here ``` <a:jano_23:799630647513317387>");
  }
});

//////

client.on("message", prof => {
  if (prof.content.startsWith(prefix + "server")) {
    var professor = new Discord.MessageEmbed()
      .setAuthor(prof.guild.name)
      .setThumbnail(prof.guild.iconURL())
      .setTitle("`Info Server`")
      .addField("<a:jano_23:799630647513317387>`Server Name`", `**${prof.guild.name}**`)
      .addField("<a:jano_8:799290253411352586>`Owner Server:`", `**${prof.guild.owner}**`)
      .addField("<a:jano_28:799630995317850152>`Server ID`", `**${prof.guild.id}**`)
      .addField("<a:jano_6:799640680812773417>`Created`", `**${prof.guild.createdAt.toLocaleString()}**`)
      .addField("<a:jano_9:799291991523065866>`Members`", `**${prof.guild.memberCount}**`)
      .addField("<a:jano_18:799629350865338428>`Channels`", `**${prof.guild.channels.cache.size}**`)
      .addField("<a:jano_7:799288815776694273>`Region`", `**${prof.guild.region}**`)
      .addField("`Roles`", `**${prof.guild.roles.cache.size}**`)
      .setFooter(`Requested | ${prof.author.tag}`, prof.author.avatarURL())
      .setTimestamp();
    prof.channel.send(professor);
  }
});

////////

client.on("message", message => {
  if (message.content.startsWith(prefix + "slowmode")) {
    if (!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS"))
      return message.channel.send("🧐 - Please Check Your Permission");
    if (
      !message.guild
        .member(message.client.user)
        .hasPermission("MANAGE_CHANNELS")
    )
      return message.channel.send(
        "🧐 - Please Check My Permission to can edit in this channel."
      );

    let time = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (isNaN(time)) return message.channel.send("**🧐 - Its not a time**");
    if (!time)
      return message.channel.send("**🧐 - Please Type a New SlowMode**");
    message.channel.setRateLimitPerUser(time);
    message.channel.send("**Done Changed A SlowMode To: " + time + "**");
  }
});

//////

client.on("message", message => {
  if (message.author.bot) return;
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong | <a:jano_24:799630717507862558> ").then(msg => {
      var PinG = `${Date.now() - msg.createdTimestamp}`;
      var ApL = `${Math.round(client.ping)}`;
      msg.edit(`\`\`\`javascript\nTime taken: ${PinG} ms.\`\`\``);
    });
  }
});

////////

client.on("message", async message => {
  if (
    message.author.bot ||
    !message.guild ||
    !message.content.startsWith(prefix)
  )
    return;
  const args = message.content
      .slice(prefix.length)
      .trim()
      .split(/ +/),
    commandName = args.shift().toLowerCase();
  if (["ban", "kick"].includes(commandName)) {
    let mode = commandName;
    if (
      !message.member.hasPermission(
        mode == "kick" ? "KICK_MEMBERS" : "BAN_MEMBERS"
      )
    )
      return message.channel.send(
        "** | You don't have Permissions do to this.**<a:jano_11:799293444136108084>"
      );
    let user = message.guild.member(
      message.mentions.users.first() ||
        message.guild.members.cache.find(x => x.id == args[0])
    );
    if (!user) return message.channel.send("**| Member not found**<a:jano_11:799293444136108084>");
    let bot = message.guild.member(client.user);
    if (user.user.id == client.user.id) return message.channel.send("lol no");
    if (user.user.id == message.guild.owner.id)
      return message.channel.send(`** | You can't ${mode} the owner**<a:jano_11:799293444136108084>`);
    if (
      user.roles.highest.position >= message.member.roles.highest.position &&
      message.author.id !== message.guild.ownerID
    )
      return message.channel.send(
        `**| You can't ${mode} people higher ranked than yourself**<a:jano_11:799293444136108084>`
      );
    if (user.roles.highest.position >= bot.roles.highest.position)
      return message.channel.send(
        `** | I can't ${mode} people who are higher ranked than me**<a:jano_11:799293444136108084>`
      );
    if (!user[`${mode == "ban" ? "bann" : mode}able`])
      return message.channel.send(
        `**| Specified user is not ${mode}able.**<a:jano_11:799293444136108084>`
      );
    user[mode](
      mode == "ban"
        ? { days: 7, reason: `Banned by ${message.author.tag}` }
        : `Kicked by ${message.author.tag}`
    )
      .then(() =>
        message.channel.send(
          `<a:jano_27:799630916820795422>** ${mode == "ban" ? "Bann" : mode}ed __${
            user.user.tag
          }__ (ID: \`${user.user.id}\`)**`
        )
      )
      .catch(console.error);
  }
});

///////
client.on("message", message => {
  if (message.content.startsWith(prefix + "support")) {
    const embed = new Discord.MessageEmbed()
      .setDescription(`[Support](https://discord.gg/3wykSpqjZq)`)
      .setTimestamp()
      .setFooter(`By: ${message.author.tag}`)
      .setAuthor(client.user.username)
      .setThumbnail(message.author.avatarURL)
      .setColor("BLACK");
    message.channel.send(embed);
    message.react("<a:jano_27:799630916820795422>");
  }
});

///////

client.on("message", pixelbot => {
  if (pixelbot.content.startsWith("j!user")) {
    if (pixelbot.author.bot) return;
    if (!pixelbot.guild)
      return pixelbot.reply("**This Command is only done on Servers**");
    pixelbot.guild.fetchInvites().then(invites => {
      let personalInvites = invites.filter(
        i => i.inviter.id === pixelbot.author.id
      );
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      var roles = pixelbot.member.roles.cache
        .map(roles => `**__${roles.name}__ |**`)
        .join(` `);

      let pixeluser = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("  | info account <a:image0:799657160505426001>")
        .setAuthor(pixelbot.author.username, pixelbot.author.avatarURL())
        .addField(
          "`✽ Name`<a:jano_28:799630995317850152>",
          pixelbot.author.username,
          true
        )
        .addField(
          "`✽ Tag`<a:jano_25:799630801032708158>",
          pixelbot.author.discriminator,
          true
        )
        .addField(
          "`✽ ID`<a:jano_10:799629559217389608>",
          pixelbot.author.id,
          true
        )
        .addField(
          "`✽ Create account`<a:jano_22:799629878764634132> ",
          moment(pixelbot.author.createdAt).format("D/M/YYYY h:mm a "),
          true
        )
        .addField(
          "`✽ number your link join`",
          inviteCount,
          true
        )
        .setTimestamp();
      pixelbot.channel.send(pixeluser).then(c => {});
    });
  }
});
/////////////// code say
client.on("message", message => {
  let commands = message.content.split(" ");
  if (commands[0] == prefix + "say") {
    if (!message.guild) return;
    if (!message.guild.member(message.author).hasPermission("ADMINISTRATOR"))
      return message.reply("**You Dont Have `ADMINISTRATOR` Permission ** <a:jano_11:799293444136108084>");
    if (!message.guild.member(client.user).hasPermission("ADMINISTRATOR"))
      return message.reply(
        "Please Check My Role Permission To `ADMINISTRATOR <a:jano_11:799293444136108084>"
      );
    var args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!args) {
      return message.channel.send("`Usage : " + prefix + "say <message>`");
    }
    message.delete();
    var embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription(`${args}`)
      .setFooter(`By ${message.author.tag}`);
    message.channel.send(embed);
  }
});

