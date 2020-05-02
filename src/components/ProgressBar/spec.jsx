import React from 'react';
import { shallow } from 'enzyme';
import checkPropTypes from "check-prop-types";
import ProgressBar from './ProgressBar';

describe('ProgressBar', () => {
    it('should render', () => {
        const component = shallow(
            <ProgressBar
                title="title"
                percentage={60}
                type="small"
            />
        );
        expect(component.find(".progress-bar").prop('style')).toEqual({ width: '60%' });
        expect(component.find(".progress-bar").prop('aria-valuenow')).toEqual(60);
    });
    describe('check prop-types', () => {
        it('should not throw error', () => {
            const props = { title: "title", percentage: 60, type: "small" };
            // eslint-disable-next-line react/forbid-foreign-prop-types
            const result = checkPropTypes(ProgressBar.propTypes, props, "props", ProgressBar.name);
            expect(result).toBeUndefined();
        });
        it('should throw error', () => {
            const props = { title: "title", percentage: "60", type: "small" };
            // eslint-disable-next-line react/forbid-foreign-prop-types
            const result = checkPropTypes(ProgressBar.propTypes, props, "props", ProgressBar.name);
            expect(result).toBeDefined();
        });
    });
});