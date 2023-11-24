import { useSelector } from "react-redux";
import { selectEventInfo } from "../../redux/events/eventsSelectors";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Paper,
} from "@mui/material";

const DetailsPage = () => {
  const event = useSelector(selectEventInfo);
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          {event.date}
        </Typography>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Tasks
        </Typography>
        <List>
          {event.events.map((event) => (
            <ListItem
              key={event.id}
              sx={{ py: 2, "&:hover": { backgroundColor: "#f0f0f0" } }}
            >
              <ListItemText
                primary={
                  <>
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{ fontWeight: "bold", mb: 1 }}
                    >
                      {event.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {event.description || "No description available"}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mt: 1 }}
                    >
                      Time:{" "}
                      {new Date(event.time).toLocaleTimeString("en-US", {
                        hour: "numeric",
                        minute: "numeric",
                      })}
                    </Typography>
                  </>
                }
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
};

export default DetailsPage;
