import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: #212121;
  }

  .highlight {
		display: inline-block;
		color: #343434;
		transition: color 250ms, text-shadow 250ms;
		text-decoration: none;
		text-shadow: 0px 1px 0px rgba(255, 255, 255, 1);
		
		position: relative;
		z-index: 0;

		&::after {
			position: absolute;
			z-index: -1;
			bottom: -5px;
			left: 50%;
			transform: translateX(-50%);
			content: '';
			width: 100%;
			height: 0px;
			background-color: #343434;
			transition: all 250ms;
		}

		&:hover {
			color: white;
			text-shadow: 0px 1px 0px rgba(0, 0, 0, 1);
			
			&::after {
				height: 150%;
        width: 150%;
			}
		}
	}

`;
