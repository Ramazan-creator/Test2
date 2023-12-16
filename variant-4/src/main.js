import { ListComponent } from './components/List.js';
import { render, RenderPosition } from './render.js';
import { WeatherComponent } from './components/Weather.js';

const weatherWidgetContainer = document.querySelector('.weather-widget');
render(new ListComponent(), weatherWidgetContainer, RenderPosition.AFTERBEGIN);


const weatherContainer = document.querySelector('.weather-result');
render(new WeatherComponent(), weatherContainer, RenderPosition.BEFOREEND);