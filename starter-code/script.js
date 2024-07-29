import {applyTheme, themeSwitch} from './theme-switch.js';
import { searchUser } from './user-search.js';

const toggleButton = document.querySelector(".switch-mode");
applyTheme();
toggleButton.addEventListener("click", themeSwitch);

searchUser();
