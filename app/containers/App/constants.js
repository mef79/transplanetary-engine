/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const DEFAULT_LOCALE = 'en'
export const SET_SAVED_DATA = 'app/Game/SET_SAVED_DATA'
export const SAVE_DATA = 'app/Game/SAVE_DATA'
export const SET_COOKIES = 'app/Game/SET_COOKIES'
export const SET_PLAYING_SOUND = 'app/SET_PLAYING_SOUND'
export const PLAY_SOUND = 'app/PLAY_SOUND'
export const SET_VOLUME = 'app/SET_VOLUME'
