import { Button } from "@chakra-ui/button";
import { Container } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import UserPage from "./UserPage";
function App() {
  return (
    <Container maxW="620px">
      <Header />
      <Routes>
        <Route path="/:username" element={<UserPage />} />
        <Route path="/:username/post/:pid" element={<PostPage />} />
      </Routes>
    </Container>
  );
}

export default App;
