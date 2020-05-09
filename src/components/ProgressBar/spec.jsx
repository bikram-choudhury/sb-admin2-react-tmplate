import React from 'react';
import { shallow } from 'enzyme';
import checkPropTypes from "check-prop-types";
import ProgressBar from './ProgressBar';

describe('ProgressBar', () => {
    it('should render heading label', () => {
        const component = shallow(
            <ProgressBar
                title="title"
                percentage={60}
                size="small"
                type="type"
                headerLabel="label"
            />
        );
        expect(component.find(".float-right").exists()).toBeTruthy();
        expect(component.find(".progress-bar").prop('style')).toEqual({ width: '60%' });
        expect(component.find(".progress-bar").prop('aria-valuenow')).toEqual(60);
        expect(component.find(".progress-bar").hasClass('type')).toBeTruthy();
    });
    it('should not render heading label', () => {
        const component = shallow(
            <ProgressBar
                title="title"
                percentage={60}
                size="small"
            />
        );
        expect(component.find(".float-right").exists()).toBeFalsy();
    });
    describe('check prop-types', () => {
        it('should not throw error', () => {
            const props = { title: "title", percentage: 60, size: "small" };
            // eslint-disable-next-line react/forbid-foreign-prop-types
            const result = checkPropTypes(ProgressBar.propTypes, props, "props", ProgressBar.name);
            expect(result).toBeUndefined();
        });
        it('should throw error', () => {
            const props = { title: "title", percentage: "60", size: "small" };
            // eslint-disable-next-line react/forbid-foreign-prop-types
            const result = checkPropTypes(ProgressBar.propTypes, props, "props", ProgressBar.name);
            expect(result).toBeDefined();
        });
    });
});