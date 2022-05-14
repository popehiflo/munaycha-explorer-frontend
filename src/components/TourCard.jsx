import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faDollarSign, faGripLinesVertical, faHeart, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import styledComponents from 'styled-components';

const TourCardWrapper = styledComponents.div`
  background: var(--color-bg-white);
  box-shadow: var(--primary-box-shadow);
  // border: var(--border-primary-light);
  border-radius: var(--border-radius);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TourCardInfo = styledComponents.div`
  border-radius: var(--border-radius);
`;

const CardInfoImage = styledComponents.div`
  position: relative;
  height: 30rem;
  border-radius: var(--border-radius) var(--border-radius) 0 0;
  // box-shadow: var(--primary-box-shadow);
  overflow: hidden;
  width: 100%;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .image-icons {
    position: absolute;
    bottom: 0.2rem;
    right: 0;
    margin-right: 0.3rem;
  }
`;

const CardInfoContent = styledComponents.div`
  padding: 1.5rem;
  h3 {
    font-size: 1.8rem;
    color: var(--color-secondary);
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 1.5rem;
    color: var(--color-secondary);
    margin-bottom: 0.5rem;
  }
`;

const ContentIcons = styledComponents.div`
  background: var(--color-bg-light);
  width: max-content;
  border-radius: var(--border-radius-btn-primary);
  padding: 0.6rem 1.5rem;
  span {
    font-size: 1.7rem;
    color: var(--color-secondary);
    svg {
      color: var(--color-primary);
    }
  }
`;

const TourCardButtons = styledComponents.div`
  background: var(--color-primary);
  padding: 1rem 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const borderWhite = {
  border: 'var(--border-primary-white)',
};

const TourCard = ({ tour }) => {
  const { id, slug, information } = tour;
  const litleInformation = information.slice(0, 100);
  return (
    <TourCardWrapper className="box-tour">
      <TourCardInfo className="box__tour">
        <CardInfoImage className="image">
          <img src={tour.img} alt="" />
          <div className="image-icons">
            <Link to="/" className="btn-icon-primary">
              <FontAwesomeIcon icon={faHeart} />
            </Link>
            <Link to="/" className="btn-icon-primary">
              <FontAwesomeIcon icon={faCartPlus} />
            </Link>
          </div>
        </CardInfoImage>
        <CardInfoContent className="content">
          <h3>{tour.title}</h3>
          {/* FIXME: mostrar solo 90 caracteres de description en p,con JS */}
          <p>{`${litleInformation} ...`}</p>
          <ContentIcons className="icons">
            <span className="day">
              <FontAwesomeIcon icon={faSun} />
              {` ${tour.duration.days} dias`}
            </span>
            <FontAwesomeIcon icon={faGripLinesVertical} style={{ fontSize: '1.5rem', margin: '0 0.6rem' }} />
            <span className="night">
              <FontAwesomeIcon icon={faMoon} />
              {` ${tour.duration.nights} noches`}
            </span>
            <FontAwesomeIcon icon={faGripLinesVertical} style={{ fontSize: '1.5rem', margin: '0 0.6rem' }} />
            <span className="money">
              <FontAwesomeIcon icon={faDollarSign} />
              {` ${tour.price}`}
            </span>
          </ContentIcons>
        </CardInfoContent>
      </TourCardInfo>
      <TourCardButtons className="box__buttons">
        {/* TODO: podria enviar solo el slug (siempre y cuando sea unico) */}
        <Link to={`/tours-peru/${id}/${slug}`} className="btn-primary" style={borderWhite}>
          Saber más del tour
        </Link>
      </TourCardButtons>
    </TourCardWrapper>
  );
};

TourCard.propTypes = {
  tour: PropTypes.shape({
    id: PropTypes.string.isRequired,
    img: PropTypes.string,
    title: PropTypes.string,
    slug: PropTypes.string,
    price: PropTypes.number,
    duration: PropTypes.shape({
      days: PropTypes.number,
      nights: PropTypes.number,
    }),
    information: PropTypes.string,
  }),
};

TourCard.defaultProps = {
  tour: {
    img: '',
    title: '',
    slug: 'slug-por-defecto',
    price: 0,
    duration: {
      days: 0,
      nights: 0,
    },
    information: '',
  },
};

export default TourCard;
