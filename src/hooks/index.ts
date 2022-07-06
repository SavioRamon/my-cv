import { useContext } from "react"
import { RepositoriesContext } from "../context/Repositories";

export const useRepositories = () => useContext(RepositoriesContext);