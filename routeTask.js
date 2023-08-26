import { Task } from "./model.js";

export const newTask = async (req, res, next) => {
  try {
    const { title, description } = req.body;

    // const task = new Task({title});

    console.log("title", title);

    //  await task.save()
    console.log("Working 1");

    await Task.create({
      title: title,
      description: description,
      user: req.user,
    });

    console.log("Working 2");

    res.status(201).json({
      success: true,
      message: "Task Added succesfully",
    });
  } catch (error) {
    next(error);
  }
};

export const getMytask = async (req, res, next) => {
  try {
    const userId = req.user._id;

    const tasks = await Task.find({ user: userId });

    res.status(200).json({
      success: true,
      tasks,
    });
  } catch (error) {
    next(error);
  }
};

export const updateTask = async (req, res, next) => {
  try {
    // const id = req.params.id

    // console.log("id".id)
    const task = await Task.findById(req.params.id);

    if (!task) return next(new Error("Invalid Error"));

    task.isCompleted = !task.isCompleted;

    await task.save();

    res.status(200).json({
      success: true,
      meassage: "Task Updated",
    });
  } catch (error) {
    next(error);
  }
};

export const deleteTask = async (req, res, next) => {
  try {
    const id = req.params.id;
    const task = await Task.findById(id);

    if (!task) return next(new Error("Invalid Error"));

    // console.log(er)

    await task.deleteOne();

    res.status(200).json({
      success: true,
      meassage: "Task Deleted",
    });
  } catch (error) {
    next(error);
  }
};
