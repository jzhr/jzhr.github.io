import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 1.5rem;
  display: flex;
  align-items: center;
	justify-content: space-between;
	
	input {
		display: none;
	}

  a {
    color: #212121;
	}
	
	.leftBlock {
		display: flex;
		justify-content: flex-start;
		line-height: 100%;
		align-items: center;
		width: 104px;
	}

  .highlight {
		margin-left: 15px;
		display: inline-block;
		color: var(--color);
		transition: color 250ms, text-shadow 250ms;
		text-decoration: none;
		
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
			background-color: var(--color);
			transition: all 250ms;
			border-radius: 5px;
		}

		&:hover {
			color: var(--bg);
			
			&::after {
				height: 150%;
        width: 150%;
			}
		}
	}
	body.dark .highlight{
		color: #FFFFFF;
	}
`;

export const ThemeToggle = styled.div`
	box-sizing: border-box;
	width: 20px;
	height: 20px;
	cursor: pointer;
	background: none;
	border: 5px solid var(--colorLite);
	border-radius: var(--toggleBorderRadius);
	transition: border-radius 0.5s, border-color 0.5s;
	&:hover {
		transition: border-color 0.5s, border-radius 0.5s;
		border-color: var(--color);
	}
`