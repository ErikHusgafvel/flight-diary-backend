import diaryData from '../../data/entries';

import { NonSensitiveDiaryEntry, DiaryEntry, NewDiaryEntry } from '../types';

const diaries: DiaryEntry[] = diaryData;

const getEntries = (): DiaryEntry[] => {
  return diaries;
};

const getNonSensitiveEntries = (): NonSensitiveDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => ({
    id,
    date,
    weather,
    visibility,
  }));
};

const findById = (id: number): DiaryEntry | undefined => {
  const entry = diaries.find((d) => d.id === id);
  return entry;
};

const addDiary = (entry: NewDiaryEntry): NonSensitiveDiaryEntry => {
  const newDiaryEntry = {
    id: Math.max(...diaries.map((d) => d.id)) + 1,
    ...entry,
  };

  diaries.push(newDiaryEntry);

  const nonSensitiveDiaryEntry = {
    id: newDiaryEntry.id,
    date: newDiaryEntry.date,
    weather: newDiaryEntry.weather,
    visibility: newDiaryEntry.visibility,
  };
  return nonSensitiveDiaryEntry;
};

export default {
  getEntries,
  addDiary,
  getNonSensitiveEntries,
  findById,
};
