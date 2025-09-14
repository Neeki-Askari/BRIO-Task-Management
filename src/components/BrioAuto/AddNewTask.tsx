import { useState, useContext } from "react";
import { TaskContext, type TaskContextType } from "../../ context/contexts"; // Adjust path if needed
import { Box, Button, InputAdornment, TextField } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";

const AddNewTask: React.FC = () => {
  const [input, setInput] = useState("");
  const { addTask } = useContext(TaskContext) as TaskContextType;

  const handleAddTask = () => {
    if (input.trim()) {
      addTask(input.trim());
      setInput("");
    }
  };

  return (
    <div className="add-new-task-container">
      <h1>BRIO AUTO</h1>
      <p>
        List your tasks for today. BRIO will plan, create, and deliver them for
        you.
      </p>
      <Box className="task-descrition-outer-container">
        <Box className="task-descrition-inner-container">
          <TextField
            className="task-descrition-input"
            multiline
            minRows={4}
            placeholder="Describe any task"
            fullWidth
            value={input}
            onChange={(e) => setInput(e.target.value)}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment
                    position="start"
                    sx={{ marginBottom: "70px" }}
                  >
                    <SearchOutlinedIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment
                    position="end"
                    sx={{ alignItems: "flex-end", marginTop: "85px" }}
                  >
                    <AttachFileOutlinedIcon
                      sx={{
                        mr: 1,
                        mb: 0.5,
                        color: "action.active",
                        cursor: "pointer",
                      }}
                    />
                    <Button
                      className="create-task-button"
                      variant="contained"
                      startIcon={<AddBoxOutlinedIcon className="create-icon" />}
                      onClick={handleAddTask}
                    >
                      Create
                    </Button>
                  </InputAdornment>
                ),
              },
            }}
          />
        </Box>
      </Box>
    </div>
  );
};

export default AddNewTask;
