import Phaser from 'phaser'
import FontsTool from '../utils/fonts';

export default class HelloWorldScene extends Phaser.Scene
{
	constructor()
	{
		super('hello-world')
	}

	preload()
    {
        // @ts-ignore
        WebFont.load({
            google: {
                families: ['Droid Sans', 'Droid Serif']
            }
        });

        console.log(FontsTool.loadFont('Fuentecita-ttf', 'assets/fonts/Joynoted Demo.ttf'));
        console.log(FontsTool.loadFont('Fuentecita-otf', 'assets/fonts/Gemini Moon.otf'));
    }

    create()
    {
        this.add.text(400, 100, 'Wenas, fuente de Google', {
            fontFamily: 'Droid Sans',
            fontSize: '42px',
            backgroundColor: "#ff0000"
        }).setOrigin(.5);
        this.add.text(400, 200, 'Wenas, fuente otf local', {
            fontFamily: 'Fuentecita-ttf',
            fontSize: '42px',
            backgroundColor: "#ff0000"
        }).setOrigin(.5);
        this.add.text(400, 300, 'Wenas, fuente ttf local', {
            fontFamily: 'Fuentecita-otf',
            fontSize: '42px',
            backgroundColor: "#ff0000"
        }).setOrigin(.5);
    }
}
