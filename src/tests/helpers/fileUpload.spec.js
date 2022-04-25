import 'setimmediate';
import cloudinary from 'cloudinary';
import { fileUpload } from "../../helpers/fileUpload";

cloudinary.config({
    cloud_name: 'axsheru', 
    api_key: '134181768662663', 
    api_secret: '9n7dq_xjHebzAB9Ocl-ACn4Xhp0',
    secure: true
});

describe('Pruebas en el fileUpload.', () => {

    test('Debe de cargar un archivo y retornar el URL.', async () => {

        const resp = await fetch('https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png');

        const blob = await resp.blob();

        const file = new File([ blob ], 'foto.png');

        const url = await fileUpload( file );

        expect( typeof url ).toBe( 'string' );
        expect( url ).toContain( 'https://res.cloudinary.com/axsheru' );

        // Borrar imagen por ID.

        const segments = url.split('/');
        const imageId = segments[ segments.length - 1 ].replace( '.png', '' );

        await cloudinary.v2.api.delete_resources( imageId );

    });

    test('Debe de retornar un error al cargar la imagen.', async () => {

        const file = new File([], 'foto.png');
        const url = await fileUpload( file );

        expect( url ).toBe( null );

    });

});