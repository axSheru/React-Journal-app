import { fileUpload } from "../../helpers/fileUpload";

describe('Pruebas en el fileUpload.', () => {

    test('Debe de cargar un archivo y retornar el URL.', async () => {

        const resp = await fetch('https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png');

        const blob = await resp.blob();

        const file = new File([ blob ], 'foto.png');

        const url = await fileUpload( file );

        expect( typeof url ).toBe( 'string' );
        expect( url ).toContain( 'https://res.cloudinary.com/axsheru' );

    });

    test('Debe de retornar un error al cargar la imagen.', async () => {

        const file = new File([], 'foto.png');
        const url = await fileUpload( file );

        expect( url ).toBe( null );

    });

});