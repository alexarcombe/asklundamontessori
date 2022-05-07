import React, { useState } from 'react';
import NewThinking from './NewThinking';
import Reason from './Reason';
import Environment from './Environment';
import FocusOnGoal from './FocusOnGoal';
import Showcase from '../Showcase';
import ImageBox from './ImageBox';
import CustomModal from '../Layout/CustomModal';
import useScroll from '../../hooks/useScrollToTop';

const contentTypes = [<Reason />, <Environment />, <FocusOnGoal />];

function Home() {
  useScroll();
  const [showModal, setShowModal] = useState(0);

  let modalContent;
  if (showModal !== 0) {
    modalContent = contentTypes[showModal - 1];
  }

  return (
    <>
      <Showcase />
      <NewThinking />
      <div className="container py-5">
        <div className="row" style={{ minHeight: '250px' }}>
          <div className="col col-md-4 col-12 mb-1">
            <ImageBox
              header="SYFTE"
              image="/images/home/klassrum.jpg"
              onClick={() => setShowModal(1)}
            />
          </div>
          <div className="col col-md-4 col-12 mb-1">
            <ImageBox
              header="UNIK LÄRMILJÖ"
              image="/images/home/hylla.jpg"
              onClick={() => setShowModal(2)}
            />
          </div>
          <div className="col col-md-4 col-12 mb-1">
            <ImageBox
              header="FOKUS"
              image="/images/home/flicka.jpg"
              onClick={() => setShowModal(3)}
            />
          </div>
        </div>
      </div>
      {showModal !== 0 && (
        <CustomModal show={showModal} handleClose={() => setShowModal(0)}>
          {modalContent}
        </CustomModal>
      )}
    </>
  );
}
export default Home;
