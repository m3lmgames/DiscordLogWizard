const { REST } = require('@discordjs/rest');
const { Routes, Client, GatewayIntentBits, Partials, Collection, InteractionType, ActivityType } = require('discord.js');
const fs = require('node:fs');
const {config} = require('./config')

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.MessageContent
  ],
  partials: Partials.ALL,
  presence: {
    activities: [{
      name: config.BotInfo.Bio,
      type: 0
    }],
    status: 'online'
  }
});

const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));


client.commands = new Collection();
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    commands.push(command.data.toJSON());
    client.commands.set(command.data.name, command)
}

client.on('interactionCreate', async function (interaction) {
    if (interaction.type !== InteractionType.ApplicationCommand) return;
    const command = client.commands.get(interaction.commandName);
    if (!command) return;
    try {
        await command.execute(interaction,client);
    } catch (e) {
        console.log(e);
    }
})


client.login(config.BotInfo.Token);


client.on('ready', async () => {

const rest = new REST({ version: '10' }).setToken(config.BotInfo.Token);

(async () => {
    try {
        console.log('Started refreshing application (/) commands.');
        

       
		await rest.put(Routes.applicationCommands(client.user.id), { body: commands })

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();
})