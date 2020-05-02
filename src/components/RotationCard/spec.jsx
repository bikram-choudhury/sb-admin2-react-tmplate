import React from 'react';
import { shallow } from 'enzyme';
import checkPropTypes from 'check-prop-types';
import RotationCard from './RotationCard';

describe('RotationCard', () => {
    it('should render', () => {
        const component = shallow(
            <RotationCard
                title=".rotate-15"
                className="bg-primary text-white rotate-15"
            />
        );
        expect(component.find('.rotate-15').exists()).toBeTruthy();
    });
    describe('check prop-types', () => {
        it('should not throw error', () => {
            const props = { title: "title", className: "small" };
            const result = checkPropTypes(
                // eslint-disable-next-line react/forbid-foreign-prop-types
                RotationCard.propTypes, props, "props", RotationCard.name
            );
            expect(result).toBeUndefined();
        });
        it('should throw error', () => {
            const props = { title: "title" };
            const result = checkPropTypes(
                // eslint-disable-next-line react/forbid-foreign-prop-types
                RotationCard.propTypes, props, "props", RotationCard.name
            );
            expect(result).toBeDefined();
        });
    });
});