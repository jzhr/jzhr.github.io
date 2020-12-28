import styled from 'styled-components';

export const Wrapper = styled.div`
  a {
    color: #6d6d6d;
    text-decoration: none;
  }

  ${({ desktop }) =>
    desktop
      ? `
			@media (max-width: 960px) {
					display: none;
			}

			a {
					margin-right: 1rem;
					display: inline-block;
					height: 25px;
					&:last-child {
							margin-right: unset;
					}
			}

			svg {
				margin-bottom: 0px;
			}
		`
      : `
			padding: 3rem;
			display: flex;
			flex-direction: column;

			a {
					margin-bottom: 1rem;
					display: inline-block;
					height: 25px;
					&:last-child {
							margin-bottom: unset;
					}
			}

			svg {
				margin: 0.5rem;
			}
	`}
`;

export const Contact = styled.div`
  svg {
		opacity: 0.8;
		transition: 0.3s;
	}

	svg:hover {
		opacity: 1;
	}
`;
