import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Metadata from '.';

describe('Metadata', () => {
    test('renders correctly', () => {
        const tree = renderer.create(
          <Metadata
            topic="Ceane La."
            tagline="Software engineer in SF" />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});