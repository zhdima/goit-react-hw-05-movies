import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container, Header, StyledLink } from "./SharedLayout.styled";
import { Loader } from '../Loader/Loader';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
