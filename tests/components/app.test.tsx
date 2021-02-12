import * as React from 'react';
import * as renderer from 'react-test-renderer';
import App from '../../src/app';

describe('App component', () => {
    test('Render without crash', () => {
        renderer.create(<App />);
    });
});
