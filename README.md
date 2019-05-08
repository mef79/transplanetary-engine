# transplanetary-engine

Converts inklewriter story format into a playable interactive fiction game.

## Credits

- Originally intended for use with the work "Transplanetary" by [Carmen Tracey](https://www.facebook.com/CTwrites/)
- Music/sound by [Kawazu Delta](https://soundcloud.com/user-741545850)
- Created with [react-boilerplate](https://github.com/react-boilerplate/react-boilerplate)

## Development

### Local installation

```
npm install
```

### Running locally

```
npm run
```

### Add a sound

- Add file to `app/music`
- Add line to import file in `app/store.js`
- Add file to `soundsData` object in `app/store.js`
- If the sound doesn't have a "play if and only if" relationship with any existing action, create a new action
- To the action that plays the sound: add `meta: { sound: '[name of sound]'}`
- Done

## Deployment

This application is currently deployed to Heroku and running live here: https://floating-harbor-79031.herokuapp.com/

It will automatically deploy the latest version whenever code is merged into this repo.
