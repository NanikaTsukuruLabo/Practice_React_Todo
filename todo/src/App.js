import "./App.css";
import FormCard from "./components/FormCard";
import { ContextIndex } from "./contexts/ContextIndex";
import Form from "./components/Form";
import { Grid } from "@material-ui/core";
import Tasks from "./components/Tasks";
import SubmitButton from "./components/SubmitButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ContextIndex>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <FormCard
                title={"入力フォーム"}
                textSecondary={"タスクを入力してください"}
                underButton={<SubmitButton />}
              >
                <Form />
              </FormCard>
            </Grid>
            <Grid item xs={6}>
              <FormCard
                title={"タスク一覧"}
                textSecondary={"タスクの状態を変更してください"}
              >
                <Tasks />
              </FormCard>
            </Grid>
          </Grid>
        </ContextIndex>
      </header>
    </div>
  );
}

export default App;
