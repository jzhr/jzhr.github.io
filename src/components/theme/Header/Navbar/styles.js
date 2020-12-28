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

  .logo {
		margin-left: 15px;
		display: inline-block;
		color: var(--color);
`;

export const ThemeToggle = styled.div`
	box-sizing: border-box;
	width: 20px;
	height: 20px;
	cursor: pointer;
	background: none;
	border: 3px solid var(--colorLite);
	border-radius: var(--toggleBorderRadius);
	transition: border-radius 0.5s, border-color 0.5s;
	&:hover {
		transition: border-color 0.5s, border-radius 0.5s;
		border-color: var(--color);
	}
`