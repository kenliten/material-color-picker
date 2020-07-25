;(function(){

	'use strict';

	let colors = {
		red: [
			{
				name: 'Red 50',
				html: '#FFEBEE',
				hex: 'FFEBEE',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Red 100',
				html: '#FFCDD2',
				hex: 'FFCDD2',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Red 200',
				html: '#EF9A9A',
				hex: 'EF9A9A',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Red 300',
				html: '#E57373',
				hex: 'E57373',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Red 400',
				html: '#EF5350',
				hex: 'EF5350',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Red 500',
				html: '#F44336',
				hex: 'F44336',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Red 600',
				html: '#E53935',
				hex: 'E53935',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Red 700',
				html: '#D32F2F',
				hex: 'D32F2F',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Red 800',
				html: '#C62828',
				hex: 'C62828',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Red 9100',
				html: '#B71C1C',
				hex: 'B71C1C',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Red A100',
				html: '#FF8A80',
				hex: 'FF8A80',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Red A200',
				html: '#FF5252',
				hex: 'FF5252',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Red A400',
				html: '#FF1744',
				hex: 'FF1744',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Red A700',
				html: '#D50000',
				hex: 'D50000',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			}
		],
		pink: [
			{
				name: 'Pink 50',
				html: '#FCE4EC',
				hex: '',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Pink 100',
				html: '#F8BBD0',
				hex: '',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Pink 200',
				html: '#F48FB1',
				hex: '',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Pink 300',
				html: '#F06292',
				hex: '',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Pink 400',
				html: '#EC407A',
				hex: '',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Pink 500',
				html: '#E91E63',
				hex: '',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Pink 600',
				html: '#D81B60',
				hex: '',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Pink 700',
				html: '#C2185B',
				hex: '',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Pink 800',
				html: '#AD1457',
				hex: '',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Pink 900',
				html: '#880E4F',
				hex: '',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Pink A100',
				html: '#FF80AB',
				hex: '',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Pink A200',
				html: '#FF4081',
				hex: '',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Pink A400',
				html: '#F50057',
				hex: '',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Pink A700',
				html: '#C51162',
				hex: '',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			}
		],
		purple: [
			{
				name: 'Purple 50',
				html: '#F3E5F5',
				hex: 'F3E5F5',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Purple 100',
				html: '#E1BEE7',
				hex: 'E1BEE7',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Purple 200',
				html: '#CE93D8',
				hex: 'CE93D8',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Purple 300',
				html: '#BA68C8',
				hex: 'BA68C8',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Purple 400',
				html: '#AB47BC',
				hex: 'AB47BC',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Purple 500',
				html: '#9C27B0',
				hex: '9C27B0',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Purple 600',
				html: '#8E24AA',
				hex: '8E24AA',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Purple 700',
				html: '#7B1FA2',
				hex: '7B1FA2',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Purple 800',
				html: '#6A1B9A',
				hex: '6A1B9A',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Purple 900',
				html: '#4A148C',
				hex: '4A148C',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Purple A100',
				html: '#EA80FC',
				hex: 'EA80FC',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Purple A200',
				html: '#E040FB',
				hex: 'E040FB',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Purple A400',
				html: '#D500F9',
				hex: 'D500F9',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Purple A700',
				html: '#AA00FF',
				hex: 'AA00FF',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			}
		],
		"deep purple": [
			{
				name: 'Deep Purple 50',
				html: '#EDE7F6',
				hex: 'EDE7F6',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Deep Purple 100',
				html: '#D1C4E9',
				hex: 'D1C4E9',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Deep Purple 200',
				html: '#B39DDB',
				hex: 'B39DDB',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Deep Purple 300',
				html: '#9575CD',
				hex: '9575CD',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Deep Purple 400',
				html: '#7E57C2',
				hex: '7E57C2',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Deep Purple 500',
				html: '#673AB7',
				hex: '673AB7',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Deep Purple 600',
				html: '#5E35B1',
				hex: '5E35B1',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Deep Purple 700',
				html: '#512DA8',
				hex: '512DA8',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Deep Purple 800',
				html: '#4527A0',
				hex: '4527A0',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Deep Purple 900',
				html: '#311B92',
				hex: '311B92',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Deep Purple A100',
				html: '#B388FF',
				hex: 'B388FF',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Deep Purple A200',
				html: '#7C4DFF',
				hex: '7C4DFF',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Deep Purple A400',
				html: '#651FFF',
				hex: '651FFF',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Deep Purple A700',
				html: '#6200EA',
				hex: '6200EA',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			}
		],
		indigo: [
			{
				name: 'Indigo 50',
				html: '#E8EAF6',
				hex: 'E8EAF6',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Indigo 100',
				html: '#C5CAE9',
				hex: 'C5CAE9',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Indigo 200',
				html: '#9FA8DA',
				hex: '9FA8DA',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Indigo 300',
				html: '#7986CB',
				hex: '7986CB',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Indigo 400',
				html: '#5C6BC0',
				hex: '5C6BC0',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Indigo 500',
				html: '#3F51B5',
				hex: '3F51B5',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Indigo 600',
				html: '#3949AB',
				hex: '3949AB',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Indigo 700',
				html: '#303F9F',
				hex: '303F9F',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Indigo 800',
				html: '#283593',
				hex: '283593',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Indigo 900',
				html: '#1A237E',
				hex: '1A237E',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Indigo A100',
				html: '#8C9EFF',
				hex: '8C9EFF',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Indigo A200',
				html: '#536DFE',
				hex: '536DFE',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Indigo A400',
				html: '#3D5AFE',
				hex: '3D5AFE',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Indigo A700',
				html: '#304FFE',
				hex: '304FFE',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			}
		],
		blue: [
			{
				name: 'Blue 50',
				html: '#E3F2FD',
				hex: 'E3F2FD',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Blue 100',
				html: '#BBDEFB',
				hex: 'BBDEFB',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Blue 200',
				html: '#90CAF9',
				hex: '90CAF9',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Blue 300',
				html: '#64B5F6',
				hex: '64B5F6',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Blue 400',
				html: '#42A5F5',
				hex: '42A5F5',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Blue 500',
				html: '#2196F3',
				hex: '2196F3',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Blue 600',
				html: '#1E88E5',
				hex: '1E88E5',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Blue 700',
				html: '#1976D2',
				hex: '1976D2',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Blue 800',
				html: '#1565C0',
				hex: '1565C0',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Blue 900',
				html: '#0D47A1',
				hex: '0D47A1',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Blue A100',
				html: '#82B1FF',
				hex: '82B1FF',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Blue A200',
				html: '#448AFF',
				hex: '448AFF',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Blue A400',
				html: '#2979FF',
				hex: '2979FF',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Blue A700',
				html: '#2962FF',
				hex: '2962FF',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			}
		],
		"light blue": [
			{
				name: 'Light Blue 50',
				html: '#E1F5FE',
				hex: 'E1F5FE',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Light Blue 100',
				html: '#B3E5FC',
				hex: 'B3E5FC',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Light Blue 200',
				html: '#81D4FA',
				hex: '81D4FA',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Light Blue 300',
				html: '#4FC3F7',
				hex: '4FC3F7',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Light Blue 400',
				html: '#29B6F6',
				hex: '29B6F6',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Light Blue 500',
				html: '#03A9F4',
				hex: '03A9F4',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Light Blue 600',
				html: '#039BE5',
				hex: '039BE5',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Light Blue 700',
				html: '#0288D1',
				hex: '0288D1',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Light Blue 800',
				html: '#0277BD',
				hex: '0277BD',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Light Blue 900',
				html: '#01579B',
				hex: '01579B',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Light Blue A100',
				html: '#80D8FF',
				hex: '80D8FF',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Light Blue A200',
				html: '#40C4FF',
				hex: '40C4FF',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Light Blue A400',
				html: '#00B0FF',
				hex: '00B0FF',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Light Blue A700',
				html: '#0091EA',
				hex: '0091EA',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			}
		],
		cyan: [
			{
				name: 'Cyan 50',
				html: '#E0F7FA',
				hex: 'E0F7FA',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Cyan 100',
				html: '#B2EBF2',
				hex: 'B2EBF2',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Cyan 200',
				html: '#80DEEA',
				hex: '80DEEA',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Cyan 300',
				html: '#4DD0E1',
				hex: '4DD0E1',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Cyan 400',
				html: '#26C6DA',
				hex: '26C6DA',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Cyan 500',
				html: '#00BCD4',
				hex: '00BCD4',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Cyan 600',
				html: '#00ACC1',
				hex: '00ACC1',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Cyan 700',
				html: '#0097A7',
				hex: '0097A7',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Cyan 800',
				html: '#00838F',
				hex: '00838F',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Cyan 900',
				html: '#006064',
				hex: '006064',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Cyan A100',
				html: '#84FFFF',
				hex: '84FFFF',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Cyan A200',
				html: '#18FFFF',
				hex: '18FFFF',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Cyan A400',
				html: '#00E5FF',
				hex: '00E5FF',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Cyan A700',
				html: '#00B8D4',
				hex: '00B8D4',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			}
		],
		teal: [
			{
				name: 'Teal 50',
				html: '#E0F2F1',
				hex: 'E0F2F1',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Teal 100',
				html: '#B2DFDB',
				hex: 'B2DFDB',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Teal 200',
				html: '#80CBC4',
				hex: '80CBC4',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Teal 300',
				html: '#4DB6AC',
				hex: '4DB6AC',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Teal 400',
				html: '#26A69A',
				hex: '26A69A',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Teal 500',
				html: '#009688',
				hex: '009688',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Teal 600',
				html: '#00897B',
				hex: '00897B',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Teal 700',
				html: '#00796B',
				hex: '00796B',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Teal 800',
				html: '#00695C',
				hex: '00695C',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Teal 900',
				html: '#004D40',
				hex: '004D40',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Teal A100',
				html: '#A7FFEB',
				hex: 'A7FFEB',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Teal A200',
				html: '#64FFDA',
				hex: '64FFDA',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Teal A400',
				html: '#1DE9B6',
				hex: '1DE9B6',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Teal A700',
				html: '#00BFA5',
				hex: '00BFA5',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			}
		],
		green: [
			{
				name: 'Green 50',
				html: '#E8F5E9',
				hex: 'E8F5E9',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Green 100',
				html: '#C8E6C9',
				hex: 'C8E6C9',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Green 200',
				html: '#A5D6A7',
				hex: 'A5D6A7',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Green 300',
				html: '#81C784',
				hex: '81C784',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Green 400',
				html: '#66BB6A',
				hex: '66BB6A',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Green 500',
				html: '#4CAF50',
				hex: '4CAF50',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Green 600',
				html: '#43A047',
				hex: '43A047',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Green 700',
				html: '#388E3C',
				hex: '388E3C',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Green 800',
				html: '#2E7D32',
				hex: '2E7D32',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Green 900',
				html: '#1B5E20',
				hex: '1B5E20',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Green A100',
				html: '#B9F6CA',
				hex: 'B9F6CA',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Green A200',
				html: '#69F0AE',
				hex: '69F0AE',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Green A400',
				html: '#00E676',
				hex: '00E676',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Green A700',
				html: '#00C853',
				hex: '00C853',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			}
		],
		"light green": [
			{
				name: 'Light Green 50',
				html: '#F1F8E9',
				hex: 'F1F8E9',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Light Green 100',
				html: '#DCEDC8',
				hex: 'DCEDC8',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Light Green 200',
				html: '#C5E1A5',
				hex: 'C5E1A5',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Light Green 300',
				html: '#AED581',
				hex: 'AED581',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Light Green 400',
				html: '#9CCC65',
				hex: '9CCC65',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Light Green 500',
				html: '#8BC34A',
				hex: '8BC34A',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Light Green 600',
				html: '#7CB342',
				hex: '7CB342',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Light Green 700',
				html: '#689F38',
				hex: '689F38',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Light Green 800',
				html: '#558B2F',
				hex: '558B2F',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Light Green 900',
				html: '#33691E',
				hex: '33691E',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Light Green A100',
				html: '#CCFF90',
				hex: 'CCFF90',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Light Green A200',
				html: '#B2FF59',
				hex: 'B2FF59',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Light Green A400',
				html: '#76FF03',
				hex: '76FF03',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Light Green A700',
				html: '#64DD17',
				hex: '64DD17',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			}
		],
		lime: [
			{
				name: 'Lime 50',
				html: '#F9FBE7',
				hex: 'F9FBE7',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Lime 100',
				html: '#F0F4C3',
				hex: 'F0F4C3',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Lime 200',
				html: '#E6EE9C',
				hex: 'E6EE9C',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Lime 300',
				html: '#DCE775',
				hex: 'DCE775',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Lime 400',
				html: '#D4E157',
				hex: 'D4E157',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Lime 500',
				html: '#CDDC39',
				hex: 'CDDC39',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Lime 600',
				html: '#C0CA33',
				hex: 'C0CA33',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Lime 700',
				html: '#AFB42B',
				hex: 'AFB42B',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Lime 800',
				html: '#9E9D24',
				hex: '9E9D24',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Lime 900',
				html: '#827717',
				hex: '827717',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Lime A100',
				html: '#F4FF81',
				hex: 'F4FF81',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Lime A200',
				html: '#EEFF41',
				hex: 'EEFF41',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Lime A400',
				html: '#C6FF00',
				hex: 'C6FF00',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Lime A700',
				html: '#AEEA00',
				hex: 'AEEA00',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			}
		],
		yellow: [
			{
				name: 'Yellow 50',
				html: '#FFFDE7',
				hex: 'FFFDE7',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Yellow 100',
				html: '#FFF9C4',
				hex: 'FFF9C4',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Yellow 200',
				html: '#FFF59D',
				hex: 'FFF59D',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Yellow 300',
				html: '#FFF176',
				hex: 'FFF176',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Yellow 400',
				html: '#FFEE58',
				hex: 'FFEE58',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Yellow 500',
				html: '#FFEB3B',
				hex: 'FFEB3B',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Yellow 600',
				html: '#FDD835',
				hex: 'FDD835',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Yellow 700',
				html: '#FBC02D',
				hex: 'FBC02D',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Yellow 800',
				html: '#F9A825',
				hex: 'F9A825',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Yellow 900',
				html: '#F57F17',
				hex: 'F57F17',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Yellow A100',
				html: '#FFFF8D',
				hex: 'FFFF8D',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Yellow A200',
				html: '#FFFF00',
				hex: 'FFFF00',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Yellow A400',
				html: '#FFEA00',
				hex: 'FFEA00',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Yellow A700',
				html: '#FFD600',
				hex: 'FFD600',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			}
		],
		amber: [
			{
				name: 'Amber 50',
				html: '#FFF8E1',
				hex: 'FFF8E1',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Amber 100',
				html: '#FFECB3',
				hex: 'FFECB3',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Amber 200',
				html: '#FFE082',
				hex: 'FFE082',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Amber 300',
				html: '#FFD54F',
				hex: 'FFD54F',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Amber 400',
				html: '#FFCA28',
				hex: 'FFCA28',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Amber 500',
				html: '#FFC107',
				hex: 'FFC107',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Amber 600',
				html: '#FFB300',
				hex: 'FFB300',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Amber 700',
				html: '#FFA000',
				hex: 'FFA000',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Amber 800',
				html: '#FF8F00',
				hex: 'FF8F00',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Amber 900',
				html: '#FF6F00',
				hex: 'FF6F00',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Amber A100',
				html: '#FFE57F',
				hex: 'FFE57F',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Amber A200',
				html: '#FFD740',
				hex: 'FFD740',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Amber A400',
				html: '#FFC400',
				hex: 'FFC400',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Amber A700',
				html: '#FFAB00',
				hex: 'FFAB00',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			}
		],
		orange: [
			{
				name: 'Orange 50',
				html: '#FFF3E0',
				hex: 'FFF3E0',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Orange 100',
				html: '#FFE0B2',
				hex: 'FFE0B2',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Orange 200',
				html: '#FFCC80',
				hex: 'FFCC80',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Orange 300',
				html: '#FFB74D',
				hex: 'FFB74D',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Orange 400',
				html: '#FFA726',
				hex: 'FFA726',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Orange 500',
				html: '#FF9800',
				hex: 'FF9800',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Orange 600',
				html: '#FB8C00',
				hex: 'FB8C00',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Orange 700',
				html: '#F57C00',
				hex: 'F57C00',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Orange 800',
				html: '#EF6C00',
				hex: 'EF6C00',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Orange 900',
				html: '#E65100',
				hex: 'E65100',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Orange A100',
				html: '#FFD180',
				hex: 'FFD180',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Orange A200',
				html: '#FFAB40',
				hex: 'FFAB40',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Orange A400',
				html: '#FF9100',
				hex: 'FF9100',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Orange A700',
				html: '#FF6D00',
				hex: 'FF6D00',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			}
		],
		"deep orange": [
			{
				name: 'Deep Orange 50',
				html: '#FBE9E7',
				hex: 'FBE9E7',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Deep Orange 100',
				html: '#FFCCBC',
				hex: 'FFCCBC',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Deep Orange 200',
				html: '#FFAB91',
				hex: 'FFAB91',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Deep Orange 300',
				html: '#FF8A65',
				hex: 'FF8A65',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Deep Orange 400',
				html: '#FF7043',
				hex: 'FF7043',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Deep Orange 500',
				html: '#FF5722',
				hex: 'FF5722',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Deep Orange 600',
				html: '#F4511E',
				hex: 'F4511E',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Deep Orange 700',
				html: '#E64A19',
				hex: 'E64A19',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Deep Orange 800',
				html: '#D84315',
				hex: 'D84315',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Deep Orange 900',
				html: '#BF360C',
				hex: 'BF360C',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Deep Orange A100',
				html: '#FF9E80',
				hex: 'FF9E80',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Deep Orange A200',
				html: '#FF6E40',
				hex: 'FF6E40',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Deep Orange A400',
				html: '#FF3D00',
				hex: 'FF3D00',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Deep Orange A700',
				html: '#DD2C00',
				hex: 'DD2C00',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			}
		],
		brown: [
			{
				name: 'Brown 50',
				html: '#EFEBE9',
				hex: 'EFEBE9',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Brown 100',
				html: '#D7CCC8',
				hex: 'D7CCC8',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Brown 200',
				html: '#BCAAA4',
				hex: 'BCAAA4',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Brown 300',
				html: '#A1887F',
				hex: 'A1887F',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Brown 400',
				html: '#8D6E63',
				hex: '8D6E63',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Brown 500',
				html: '#795548',
				hex: '795548',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Brown 600',
				html: '#6D4C41',
				hex: '6D4C41',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Brown 700',
				html: '#5D4037',
				hex: '5D4037',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Brown 800',
				html: '#4E342E',
				hex: '4E342E',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Brown 900',
				html: '#3E2723',
				hex: '3E2723',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			}
		],
		gray: [
			{
				name: 'Gray 50',
				html: '#FAFAFA',
				hex: 'FAFAFA',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Gray 100',
				html: '#F5F5F5',
				hex: 'F5F5F5',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Gray 200',
				html: '#EEEEEE',
				hex: 'EEEEEE',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Gray 300',
				html: '#E0E0E0',
				hex: 'E0E0E0',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Gray 400',
				html: '#BDBDBD',
				hex: 'BDBDBD',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Gray 500',
				html: '#9E9E9E',
				hex: '9E9E9E',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Gray 600',
				html: '#757575',
				hex: '757575',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Gray 700',
				html: '#616161',
				hex: '616161',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Gray 800',
				html: '#424242',
				hex: '424242',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Gray 900',
				html: '#212121',
				hex: '212121',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			}
		],
		"blue gray": [
			{
				name: 'Blue Gray 50',
				html: '#ECEFF1',
				hex: 'ECEFF1',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Blue Gray 100',
				html: '#CFD8DC',
				hex: 'CFD8DC',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Blue Gray 200',
				html: '#B0BEC5',
				hex: 'B0BEC5',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Blue Gray 300',
				html: '#90A4AE',
				hex: '90A4AE',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Blue Gray 400',
				html: '#78909C',
				hex: '78909C',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Blue Gray 500',
				html: '#607D8B',
				hex: '607D8B',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Blue Gray 600',
				html: '#546E7A',
				hex: '546E7A',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Blue Gray 700',
				html: '#455A64',
				hex: '455A64',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Blue Gray 800',
				html: '#37474F',
				hex: '37474F',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			},
			{
				name: 'Blue Gray 900',
				html: '#263238',
				hex: '263238',
				rgb: 'rgb(255, 235, 238)',
				rgba: 'rgba(255, 235, 238, 1)'
			}
		],
	};

	let main = function(){
		let container = document.getElementById('main');
		for (let color in colors){
			let title = document.createElement('h2');
			title.innerHTML = color.toUpperCase();
			let col = document.createElement('div');
			col.className = 'col-6';
			col.appendChild(title);
			let hr = document.createElement('hr');
			col.appendChild(hr);
			let subContainer = document.createElement('div');
			subContainer.className = 'container-fluid';
			for (let element in colors[color]){
				let child = document.createElement('input');
				child.type = 'text';
				child.className = 'material-color';
				child.style.backgroundColor = colors[color][element].html;
				child.style.color = colors[color][element].html;
				child.value = colors[color][element].html;
				child.title = colors[color][element].name;
				child.addEventListener('click', (e)=>{
					let input = e.target;
					input.select();
					input.setSelectionRange(0, 25);
					document.execCommand('copy');
					console.log(colors[color][element].html + " copied!");
				});
				subContainer.appendChild(child);
			}
			col.appendChild(subContainer);
			container.appendChild(col);
		}
	}

	main();

})();