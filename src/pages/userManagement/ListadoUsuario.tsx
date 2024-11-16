import { Box, Button, styled } from "@mui/material";
import FlexBox from "components/FlexBox";
import SearchInput from "components/SearchInput";
import ClientListColumnShape from "components/userManagement/columClient";
import CustomTable from "components/userManagement/CustomTable";
import { userClientFakeData } from "components/userManagement/fakeClient";
import useTitle from "hooks/useTitle";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

// styled component
const StyledFlexBox = styled(FlexBox)(({ theme }) => ({
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  marginBottom: 20,
  [theme.breakpoints.down(500)]: {
    width: "100%",
    "& .MuiInputBase-root": { maxWidth: "100%" },
    "& .MuiButton-root": {
      width: "100%",
      marginTop: 15,
    },
  },
}));

const ListClient: FC = () => {
  useTitle("Listado de clientes");

  const navigate = useNavigate();
  const handleAddUser = () => navigate("/dashboard/add-user");

  return (
    <Box pt={2} pb={4}>
      <StyledFlexBox>
        <SearchInput placeholder="Buscar cliente" />
        <Button variant="contained" onClick={handleAddUser}>
          Agregar nuevo cliente
        </Button>
      </StyledFlexBox>

      <CustomTable columnShape={ClientListColumnShape} data={userClientFakeData} />
    </Box>
  );
};

export default ListClient;
