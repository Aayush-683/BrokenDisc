<h1 align="center">No Coding Needed Discord Music Bot</h1>
<p align="center"><img src="https://cdn.discordapp.com/attachments/779285545775661076/844206868150878208/unnamed.png"></p>

## Tutorial
Tutorial has been uploaded on YouTube <img src="https://www.youtube.com/about/static/svgs/icons/brand-resources/YouTube_icon_full-color.svg?cache=f2ec7a5" width="30px"> 

Watch it by clicking [here](https://bit.ly/blackknight683)

## Run the projects

Glitch: [![Remix on Glitch](https://cdn.glitch.com/2703baf2-b643-4da7-ab91-7ee2a2d00b5b%2Fremix-button.svg)](https://glitch.com/edit/#!/import/github/BlackKnight683/Broken-Disc)

Heroku: [![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/BlackKnight683/Broken-Disc)

Repl: [![Run on Repl.it](https://repl.it/badge/github/BlackKnight683/Broken-Disc)](https://repl.it/github/BlackKnight683/Broken-Disc)


Made with :heart: and JavaScript!

## Configuration

Copy or Rename `config.json.example` to `config.json` and fill out the values:

```json
{
  "TOKEN": "",
  "YOUTUBE_API_KEY": "",
  "SOUNDCLOUD_CLIENT_ID": "",
  "MAX_PLAYLIST_SIZE": 10,
  "PREFIX": "/",
  "PRUNING": false,
  "STAY_TIME": 30
}
```

## Features & Commands

> Note: The default prefix is '/'

* 🎶 Play music from YouTube via url

`/play https://www.youtube.com/watch?v=XXX69420`

* 🔎 Play music from YouTube via search query

`/play Faded`

* 🎶 Play music from Soundcloud via url

`/play https://soundcloud.com/blackknight683/free-moneyz`

* 🔎 Search and select music to play

`/search RickRoll`

Reply with song number or numbers seperated by comma that you wish to play

Examples: `1` or `1,2,3`

* Play youtube playlists via url

`/playlist https://www.youtube.com/watch?v=Your_QuErRy_hErE`

* 🔎 Play youtube playlists via search query

* Now Playing (/np)
* Queue system (/queue, /q)
* Loop / Repeat (/loop)
* Shuffle (/shuffle)
* Volume control (/volume, /v)
* Lyrics (/lyrics, /ly)
* Pause (/pause)
* Resume (/resume, /r)
* Skip (/skip, /s)
* Skip to song # in queue (/skipto, /st)
* Remove song # from queue (/remove, /rm)
* Toggle pruning of bot messages (/pruning)
* Help (/help, /h)
* Command Handler from [discordjs.guide](https://discordjs.guide/)
* Media Controls via Reactions

## 🤝 Contributing

1. [Fork the repository](https://github.com/BlackKnight683/Broken-Disc/fork)
2. Clone your fork: `git clone https://github.com/your-username/Broken-Disc.git`
3. Create your feature branch: `git checkout -b my-new-feature`
4. Commit your changes: `git commit -am 'Add some feature'`
5. Push to the branch: `git push origin my-new-feature`
6. Submit a pull request

## 📝 Credits

[@iCrawl](https://github.com/iCrawl) For the queue system used in this application which was adapted from [@iCrawl/discord-music-bot](https://github.com/iCrawl/discord-music-bot)

[@eritislami](https://github.com/eritislami) For the advanced search system used in this application which was adapted from [@eritislami/evobot](https://github.com/eritislami/evobot)
