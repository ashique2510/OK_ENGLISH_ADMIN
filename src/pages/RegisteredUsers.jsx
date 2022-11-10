import React, { useEffect, useState } from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';

import { customersData, customersGrid } from '../data/dummy';
import { Header } from '../components';
import { useStateContext } from '../contexts/ContextProvider';




const RegisteredUsers = () => {

 const { allUserData } = useStateContext()
 console.log(allUserData);

  //  const TableHeading = [
  //   { type: 'checkbox', width: '50' },
  //   { headerText: 'Image',
  //     width: '150',
  //     textAlign: 'Center' },
  //   {   field: 'name',
  //      headerText: 'name',
  //     width: '150',
  //     textAlign: 'Center' },
  //   { field: 'email',
  //     headerText: 'Email',
  //     width: '150',
  //     textAlign: 'Center' },
  //   { field: 'Status',
  //     headerText: 'Status',
  //     width: '130',
  //     format: 'yMd',
  //     textAlign: 'Center',
  //      },
  //     { field: 'district',
  //      headerText: 'district',
  //      width: '150',
  //      textAlign: 'Center' },
  //      { field: 'createdAt',
  //      headerText: 'Joined Date',
  //      width: '150',
  //      textAlign: 'Center' },
    
  //   { field: '_id',
  //     headerText: 'Customer ID',
  //     width: '120',
  //     textAlign: 'Center',
  //     isPrimaryKey: true,
  //   },
  
  // ];


  const customerGridImage = (props) => (
    <div className="image flex gap-4">
      <img
        className="rounded-full w-10 h-10"
        src={props.profilePicUrl}
        alt="employee"
      />
      <div>
        <p>{props.name}</p>
        {/* <p>{props.CustomerEmail}</p> */}
      </div>
    </div>
  );
  
  const customerGridStatus = (props) => (
    <div className="flex gap-2 justify-center items-center text-gray-700 capitalize">
      <p style={{ background: props.StatusBg }} className="rounded-full h-3 w-3" />
      <p>{props.Status}</p>
    </div>
  );




  const customersGrid = [
    { type: 'checkbox', width: '50' },
    { headerText: 'Name',
      width: '150',
      template: customerGridImage,
      textAlign: 'Center' },
    { field: 'email',
      headerText: 'Email',
      width: '150',
      textAlign: 'Center' },
    // { field: 'Status',
    //   headerText: 'Status',
    //   width: '130',
    //   format: 'yMd',
    //   textAlign: 'Center',
    //   template: customerGridStatus },
    // {
    //   field: 'Weeks',
    //   headerText: 'Weeks',
    //   width: '100',
    //   format: 'C2',
    //   textAlign: 'Center' },
    // { field: 'Budget',
    //   headerText: 'Budget',
    //   width: '100',
    //   format: 'yMd',
    //   textAlign: 'Center' },
    { field: 'date',   
      headerText: 'Date',
      width: '150',
      textAlign: 'Center' },

    { field: 'time',   
    headerText: 'Time',
    width: '150',
    textAlign: 'Center' },
     
  
    { field: '_id',
      headerText: 'Customer ID',
      width: '120',
      textAlign: 'Center',
      isPrimaryKey: true,
    },
  
  ];


  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ['Delete','Search'];
  const editing = { allowDeleting: true, allowEditing: true };

  

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Registered Users" />
      <GridComponent
        dataSource={allUserData}
        enableHover={false}
        allowPaging
        pageSettings={{ pageCount: 5 }}
        selectionSettings={selectionsettings}
        toolbar={toolbarOptions}
        editSettings={editing}
        allowSorting
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {customersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter]} />
      </GridComponent>
    </div>
  );
};

export default RegisteredUsers