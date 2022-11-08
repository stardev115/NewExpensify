import moment from 'moment';
import DateUtils from '../../src/libs/DateUtils';

const datetime = '2022-11-07 00:00:00';
const locale = 'en';

describe('DateUtils/getLocalMomentFromDatetime', () => {
    it('should return a moment object with the correct date and time', () => {
        const timezone = 'America/Los_Angeles';
        const localMoment = DateUtils.getLocalMomentFromDatetime(locale, datetime, timezone);
        expect(moment.isMoment(localMoment)).toBe(true);
        expect(moment(localMoment).format()).toEqual('2022-11-06T16:00:00-08:00');
    });
});

describe('DateUtils/datetimeToCalendarTime', () => {
    it('should return a moment object with the correct date and time', () => {
        expect(DateUtils.datetimeToCalendarTime(locale, datetime)).toBe('Yesterday at 4:00 PM');
    });
});