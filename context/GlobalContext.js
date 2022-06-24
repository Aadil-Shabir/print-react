import { useState, createContext } from 'react';
import { nanoid } from 'nanoid';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [selected, setSelected] = useState(null);
  const data = [
    {
      _id: 'L-777@12-12-2022',
      wellName: 'L-777',
      submittedBy: 'Rashid Al Habsi',
      reportDate: '2022-06-05',
      company: 'Shell',
      field: 'Arizona',
      fluid: 'Oil',
      wellType: 'ESP Oil Producer',
      environment: 'Onshore',
      status: 'Producing',
      completion: 'Single',
      wellProfile: 'Horizontal',
      dateDrilled: '1977-05-13',
      originalElevation: 10.12,
      wellRemarks: 'Was shut-in between 2010-2020',
      attachments: ['file1.jpg', 'file2.pdf'],
      jobDescription: 'MPLT and set HE3 plug',
      jobStartDate: '2022-10-10',
      jobStartTime: '07:00',
      jobEndDate: '2022-10-10',
      jobEndTime: '17:30',
      conveyance: 'Slickline',
      operation: 'Standalone',
      runs: [
        { result: 'Issues', maxDepth: 1200, remarks: 'Hang up at SSV' },
        { result: 'Success', maxDepth: 2500, remarks: 'Passed OK' },
      ],
      jobRemarks: 'Overall good job, stuck few times only',
      personnel: [
        {
          fullName: 'John Doe',
          designation: 'Crew Chief',
          crew: 'Crew 1',
          shift: 'Day',
        },
        {
          fullName: 'Paul Johnson',
          designation: 'Crew Chief',
          crew: 'Crew 2',
          shift: 'Night',
        },
      ],
      equipment: [
        {
          description: 'WLU 5',
        },
        {
          description: 'HIAB 33',
        },
        {
          description: '10T Crane',
        },
      ],
      sequenceOfEvents: [
        {
          date: '2010-01-25',
          time: '07:00',
          description: 'Rig up',
        },
        {
          date: '2010-01-25',
          time: '17:30',
          description: 'Left location',
        },
      ],
      toolstring: [
        {
          imageURL: '/roller-stem.svg',
          description: 'GIH',
          connection: 'SR',
          fishneck: 1.5,
          weight: 20,
          length: 4,
          maxOd: 3.4,
        },
        {
          imageURL: '/roller-stem.svg',
          description: 'GIH',
          connection: 'SR',
          fishneck: 1.5,
          weight: 20,
          length: 4,
          maxOd: 3.4,
        },
      ],
      pce: [
        {
          imageURL: '/gih.svg',
          description: 'GIH',
          connection: 'OTIS',
          pressureRating: '10K',
          minId: 3.2,
          length: 8,
        },
        {
          imageURL: '/bop.svg',
          description: 'GIH',
          connection: 'OTIS',
          pressureRating: '10K',
          minId: 3.2,
          length: 8,
        },
      ],
      pceRunNumber: 'All Runs',
      pceMinId: 2.3,
      pceTotalLength: 32,
      toolstringRunNumber: 'All Runs',
      toolstringMaxOd: 2.5,
      toolstringTotalLength: 24,
      toolstringTotalWeight: 65,
      units: {
        depth: 'ft',
        length: 'ft',
        diameter: 'in',
        weight: 'lbs',
        pressure: 'psi',
        temperature: 'c',
        time: '24h',
      },
      attachments: [{ fileName: 'tool.jpg' }],
    },
  ];

  const filteredReports = data.filter((item) => item._id === selected);

  return (
    <GlobalContext.Provider
      value={{ data, selected, setSelected, filteredReports }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
