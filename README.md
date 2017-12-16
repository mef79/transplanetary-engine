# Game Repo

A brief description of the repo

## Development

### Add a sound

- Add file to `app/music`
- Add line to import file in `app/store.js`
- Add file to `soundsData` object in `app/store.js`
- If the sound doesn't have a "play if and only if" relationship with any existing action, create a new action
- To the action that plays the sound: add `meta: { sound: '[name of sound]'}`
- Done
