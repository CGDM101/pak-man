import imgpakman from '../img/imgpakman.jpg'
import imgsnake from '../img/imgsnake.jpg'
import imgtictactoe from '../img/imgtictactoe.jpg'
import imgbattleship from '../img/imgbattleship.jpg'
import imgspaceinvaers from '../img/imgspaceinvaers.jpg'
import imgpong from '../img/imgpong.jpg'
import imgyatzy from '../img/imgyatzy.jpg'

const Games = [
	{
		ip: 1,
		name: 'PAC-MAN',
		type: false,
		category: 'our',
		url: 'https://stirring-dodol-875e35.netlify.app/',
		img: imgpakman
	},
	{
		ip: 2,
		name: 'YATZY',
		type: true,
		category: 'our',
		url: '/yatzy',
		img: imgyatzy
	},
	{
		ip: 3,
		name: 'SNAKE',
		type: false,
		category: 'external',
		url: 'https://playsnake.org/?msclkid=7c3f6cadd15711ec851ff395b16ea1d1',
		img: imgsnake
	},
	{
		ip: 4,
		name: 'TIC-TAC-TOE',
		type: false,
		category: 'our',
		url: 'https://preeminent-profiterole-bd5575.netlify.app/',
		img: imgtictactoe
	},
	{
		
		ip: 5,
		name: 'BATTLESHIP',
		type: false,
		category: 'our',
		url: 'https://exquisite-kashata-942d1b.netlify.app/',
		img: imgbattleship
	},
	{
		ip: 6,
		name: 'SPACE INVADERS',
		type: false,
		category: 'external',
		url: 'https://www.spaceinvadersflash.com/?msclkid=6a5634cdd15d11eca2672ba97ffc8a94',
		img: imgspaceinvaers
	},
	{
		ip: 7,
		name: 'PONG GAME',
		type: false,
		category: 'external',
		url: 'https://www.ponggame.org/?msclkid=985c7090d15811ec910f02f2a128bddf',
		img: imgpong
	},
]

export default Games
