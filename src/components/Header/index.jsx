import { HeaderContainer } from "./style";


export const Header = ({children}) => {
  return (
    <HeaderContainer>
      <div className="headerDiv">
      <h1>Kenzie Hub</h1>
      {children}
    </div>
    </HeaderContainer>
  );
};
