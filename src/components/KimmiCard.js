import { Experience } from "./Experience";
import { PersonalInfo } from "./PersonalInfo";
import { Grid } from "./Util/Grid";

export const KimmiCard = () => {
  return (
    <Grid>
      <PersonalInfo />
      <Experience />
    </Grid>
  );
};
