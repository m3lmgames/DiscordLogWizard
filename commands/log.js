// ---------------------------------------------------------- APIs
const { SlashCommandBuilder } = require('discord.js')
const { ChannelType } = require('discord.js');
const { PermissionsBitField } = require('discord.js');
const fs = require('node:fs');
const { config } = require('../config')
const { Lang } = require('../lang')
const {
    EmbedBuilder,
    WebhookClient,
    ActionRowBuilder,
    SelectMenuBuilder
} = require('discord.js')


const langCode = config.CommandOpt.Lang;
const LangConfig = Lang[langCode];

// ---------------------------------------------------------- Internal vars.
let luatemplate
let category = {
    id: "",
    type: 4
};
let roleid = {
    id: ""
};
var counter = config.JsCodes.Table.length - 1
var counterCATE = config.Logs.Categories.length - 1
luatemplate = config.LuaCodes.Table
const table = config.JsCodes.Table


//----------------------------------------------------------------- Start

module.exports = { // epxport for index.js
    data: new SlashCommandBuilder()
        .setDMPermission(false)
        .setName("log") // Command name
        .setDescription(LangConfig.Description), // Command description
    async execute(interaction, client) {




        interaction.channel.createWebhook({ // create webhook
                name: config.CommandOpt.WebhooksName, // The webhook name
                avatar: config.CommandOpt.WebhooksAvatar, // The webhook avatar
            })
            .then(async (webhookK) => {
                const roomwebhookcurMM = webhookK.url;



                interaction.reply({ // Interaction replay
                    embeds: [
                        new EmbedBuilder()
                        .setTitle('M3LM Games Co. Logs System')
                        .setDescription(`**${LangConfig.Starting}**`)
                        .setFooter({
                            text: 'M3LM Games System | M3LM ERP | v2.1 | Logs'
                        })
                        .setColor('DarkOrange')
                    ],
                })

                /*------------------------------------------------------------------------------------------- */

                var guildsid = interaction.guild.id; // Guild declaring
                var guild = client.guilds.cache.get(guildsid); // Get guild id


                for (let i = 0; i < config.Logs.Roles.length; i++) { // Create the roles
                    guild.roles.create({
                        name: `${config.Logs.Roles[i].name}`,
                        color: `${config.Logs.Roles[i].color}`,
                        permissions: []
                    })
                    if (i == config.Logs.RolesNum - 1) {
                        M3lmRepeatCATE() // Call categories function
                    }
                }


                function m3lmcate(z) { // Category function
                    guild.channels.create({
                        name: `${config.Logs.Categories[z].name}`,
                        type: ChannelType.GuildCategory
                    })
                }

                function M3lmRepeatCATE() { // Categories function

                    m3lmcate(counterCATE)

                    counterCATE--;
                    if (counterCATE > -1) {
                        setTimeout(M3lmRepeatCATE, 1000);
                    } else {
                        M3lmRepeat()
                    }
                }


                /* ------------------------------------------------ */

                function m3lmcreatewebhooks(i, guild) { // Create rooms with webhook function
                    var permissionOverwritesM3LMARRAY = []; // Create array to store roles permissions
                    for (let m = 0; m < table[i].Roles.length; m++) { // Get the roles from config file
                        let roleid = guild.roles.cache.find((r) => r.name === `${table[i].Roles[m]}`); // Get the role id
                        let m3lmtable = {
                            id: roleid.id,
                            deny: [PermissionsBitField.Flags.MentionEveryone, PermissionsBitField.Flags.SendMessages],
                            allow: [PermissionsBitField.Flags.ViewChannel, PermissionsBitField.Flags.ReadMessageHistory]
                        } // Create table to store the role permissions
                        permissionOverwritesM3LMARRAY.push(m3lmtable); // Push the table to the array
                    }
                    let category = guild.channels.cache.find(cat => cat.name === `${table[i].Category}`) // Get the category for the channel
                    if (category.type === 4) { // Check if the result is actually a category
                        guild.channels.create({
                            name: `${table[i].channelname}`,
                            type: ChannelType.GuildText,
                            parent: category.id,
                            permissionOverwrites: permissionOverwritesM3LMARRAY
                        }).then(async (chanelmone) => { // Create the channel
                            await chanelmone.permissionOverwrites.create(guild.roles.everyone, {
                                ViewChannel: false
                            }); // Prevent everyone from seeing the channel

                            await chanelmone.createWebhook({ // create webhook
                                    name: config.CommandOpt.WebhooksName, // The webhook name
                                    avatar: config.CommandOpt.WebhooksAvatar, // The webhook avatar
                                })
                                .then(async (webhook) => {
                                    luatemplate = await luatemplate.toString().replace(table[i].LuaCode, webhook.url) // Put the webhook url in the format table
                                    fs.writeFile(`./${config.CommandOpt.FinalFileName}`, luatemplate, err => { // echo the format table to the file
                                        if (err) {
                                            console.error(err); // Catch errors
                                        }
                                    });

                                    await chanelmone.send({ // Success message
                                        embeds: [
                                            new EmbedBuilder()
                                            .setTitle(LangConfig.DoneThisChannel)
                                            .setFooter({
                                                text: 'M3LM Games System | M3LM ERP | v2.1 | Logs'
                                            })
                                            .setColor('DarkOrange')
                                        ],
                                    });
                                }).catch(console.error);
                        }).catch(console.error);
                    }
                }


                function M3lmRepeat() { // Main create rooms and webhooks function
                    m3lmcreatewebhooks(counter, guild)

                    counter--;
                    if (counter > -1) {

                        if (config.JsCodes.Table.length < 51) {
                            setTimeout(M3lmRepeat, 500);
                        } else {
                            setTimeout(M3lmRepeat, 55000);
                        }
                    } else {
                        if (!roomwebhookcurMM) return;
                        const hook = new WebhookClient({
                            url: roomwebhookcurMM
                        });
                        let filename = `./LOGs-System.lua`
                        hook.send({
                            files: [filename]
                        })

                    }
                }
            })


        //----------------------------------------------------------------- End

    }
}