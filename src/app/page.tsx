import { use, Suspense } from "react";
import { getHouses } from "./api/houses/route";
import { getMember } from "./api/members/[memberId]/route";
import {
  Card,
  CardContent,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import styles from "./page.module.css";

export default function Home() {
  const houses = use(getHouses());

  return (
    <main className={styles.main}>
      <Typography variant="h1" sx={{ marginTop: 3, marginBottom: 3 }}>
        A Song of Ice and Fire Deathlist
      </Typography>

      <Suspense fallback={<p>loading...</p>}>
        <Grid container spacing={2} columns={12}>
          {houses?.map((house) => {
            const houseId: string = house.url
              .substring(house.url.lastIndexOf("/") + 1)
              .toString();

            return (
              <Grid item key={houseId} xs={12} md={4}>
                <Card sx={{ height: "100%" }}>
                  <CardContent>
                    <Typography variant="h2" gutterBottom textAlign="center">
                      {house.name}
                    </Typography>

                    <Divider />

                    {house?.swornMembers.length ? (
                      <List
                        sx={{
                          maxHeight: 250,
                          overflowY: "scroll",
                        }}
                      >
                        {house.swornMembers.map((member) => {
                          const memberId: string = member
                            .substring(member.lastIndexOf("/") + 1)
                            .toString();
                          const character = use(getMember(memberId));
                          const isDead = character.died !== "";

                          return (
                            <ListItem key={memberId} disablePadding>
                              <ListItemText>
                                <Stack
                                  direction="row"
                                  justifyContent="space-between"
                                >
                                  <Typography>{character?.name}</Typography>
                                  <Typography textAlign={"left"}>
                                    {isDead
                                      ? `Died ${
                                          character.died
                                            .charAt(0)
                                            .toLowerCase() +
                                          character.died.slice(1)
                                        }`
                                      : `Alive`}
                                  </Typography>
                                </Stack>
                                <Divider />
                              </ListItemText>
                            </ListItem>
                          );
                        })}
                      </List>
                    ) : (
                      <ListItem disablePadding>
                        <ListItemText>
                          This house has no sworn members.
                        </ListItemText>
                      </ListItem>
                    )}
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Suspense>
    </main>
  );
}
