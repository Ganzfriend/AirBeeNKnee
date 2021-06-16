import React from 'react';
import { Skeleton } from '@material-ui/lab';

const Policies = ({listing}) => {
  const policiesLookup = {
    house: (<HomeIcon />),
    clean: (<FlareIcon />),
    rules: (<LibraryBooksIcon />)
  };

  if (!listing) {
    return (
      <div>
        <Skeleton variant="text" />
        <Skeleton variant="text" />
      </div>
    )
  } else {
    return (
      <div>
        {listing?.policies?.map( (policy) => {
          return (
            <span>
            <h3>{policiesLookup[policy?.icon]} {policy?.title}</h3>
            <p>{policy?.description}</p>
            </span>
          )
        })}
      </div>
    )
  }
  // <div>
  //   <Skeleton variant="text" />
  //   <Skeleton variant="circle" />
  //   <Skeleton variant="text" />
  // </div>
};

export default Policies;
