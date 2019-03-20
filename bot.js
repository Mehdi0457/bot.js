client.on('message', vipgen => {
    if (vipgen.content == "§gr vip") {  
        var x = ["321464578",
"7864566784",
"467643126",
"467894213131",
"6456786664",
"64567866666213",
"6487646446",
"13313464554",
"987133146",
"3134678456",
];
        var x2 = ['.',
        ".",
                ".",
        ".",
        ".",
        ".",
        ".",
        ".",
        ".",
        ".",
       
       
       
       
        ];
       
        var x3 = Math.floor(Math.random()*x.length)
        vipgen.author.send(`**تم صنع الكود بنجاح**  __**${x[x3]}**__
**هذا هو الكود**`).then(msg1=> {
            var r = vipgen.author.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 1,
                errors : ['time']
            })
        r.catch(() => {
            return vipgen.author.send(`لم يتم الصنع!
            `)
        })
       
        r.then((collected)=> {
            vipgen.author.send(`تم الصنع`);
        })
        })
    }
})
 
client.on("message", message => {
 
    if (message.content.startsWith('§used | §use')) {
        let args = message.content.split(' ').slice(1);
       
if (7864566784==args){
    message.reply('تمت العملية بنجاح!')  
    message.member.addRole(message.guild.roles.find(c => c.name == "Vip"));
    }
    if (7864566784!=args){
}
 
}});
 
client.on("message", message => {
 
    if (message.content.startsWith('§use')) {
        let args = message.content.split(' ').slice(1);
       
if (467643126==args){
    message.reply('تمت العملية بنجاح!')  
    message.member.addRole(message.guild.roles.find(c => c.name == "Vip"));//لاتنسى وين مايوجد أرقام  غيرها لما تغير أكواد الفي أي بي لأن اذا ماغيرتها مرح يعطيك رانك أبدا
    }
    if (467643126!=args){
}
 
}});
 
client.on("message", message => {
 
    if (message.content.startsWith('§use')) {
        let args = message.content.split(' ').slice(1);
       
if (467894213131==args){
    message.reply('تمت العملية بنجاح!')  
    message.member.addRole(message.guild.roles.find(c => c.name == "Vip"));
    }
    if (467894213131!=args){
}
 
}});
 
client.on("message", message => {
 
    if (message.content.startsWith('§use')) {
        let args = message.content.split(' ').slice(1);
       
if (6456786664==args){
    message.reply('تمت العملية بنجاح!')  
    message.member.addRole(message.guild.roles.find(c => c.name == "Vip"));
    }
    if (6456786664!=args){
}
 
}});
 
client.on("message", message => {
 
    if (message.content.startsWith('§use')) {
        let args = message.content.split(' ').slice(1);
       
if (64567866666213==args){
    message.reply('تمت العملية بنجاح!')  
    message.member.addRole(message.guild.roles.find(c => c.name == "Vip"));
    }
    if (64567866666213!=args){
}
 
}});
 
client.on("message", message => {
 
    if (message.content.startsWith('§use')) {
        let args = message.content.split(' ').slice(1);
       
if (6487646446==args){
    message.reply('تمت العملية بنجاح!')  
    message.member.addRole(message.guild.roles.find(c => c.name == "Vip"));
    }
    if (6487646446!=args){
}
 
}});
 
client.on("message", message => {
 
    if (message.content.startsWith('§use')) {
        let args = message.content.split(' ').slice(1);
       
if (13313464554==args){
    message.reply('تمت العملية بنجاح!')  
    message.member.addRole(message.guild.roles.find(c => c.name == "Vip"));
    }
    if (13313464554!=args){
}
 
}});
 
client.on("message", message => {
 
    if (message.content.startsWith('§use')) {
        let args = message.content.split(' ').slice(1);
       
if (987133146==args){
    message.reply('تمت العملية بنجاح!')  
    message.member.addRole(message.guild.roles.find(c => c.name == "Vip"));
    }
    if (987133146!=args){
}
 
}});
 
client.on("message", message => {
 
    if (message.content.startsWith('§use')) {
        let args = message.content.split(' ').slice(1);
       
if (3134678456==args){
    message.reply('تمت العملية بنجاح!')  
    message.member.addRole(message.guild.roles.find(c => c.name == "Vip"));
    }
    if (3134678456!=args){
}
 
}});
 
client.on("message", message => {
 
    if (message.content.startsWith('§use')) {
        let args = message.content.split(' ').slice(1);
       
if (321464578==args){
    message.reply('تمت العملية بنجاح!')  
    message.member.addRole(message.guild.roles.find(c => c.name == "Vip"));
    }
    if (321464578!=args){
}
 
}});
 
client.on("message", message => {
    var prefix = "§";
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "use")) {
        var msg;
        msg = parseInt();
     
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done!",
        color: 0x06DF00,
        description: "بالتوفيق ",
        footer: {
          text: "©LioN_Dz"
        }
      }}).then(msg => {msg.delete(2)});
                          }
 
     
});
