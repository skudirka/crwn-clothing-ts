import {createSelector} from 'reselect';
import {IRootState} from '../root-types';

const selectDirectory = (state:IRootState) => state.directory;

export const selectDirectorySections = createSelector([selectDirectory], directory => directory.sections);