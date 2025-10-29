import * as taskRepository from '../repositories/taskRepo.js';

export async function getAllTasks() {
  return await taskRepository.findAll();
}

export async function createTask(newTask) {
  return await taskRepository.create(newTask);
}

export async function getTaskByID(id) {
  const response = await taskRepository.findById(id);
  return response;
}
