import gql from 'graphql-tag'
export const deleteOneProjects = gql`
mutation (
    where: {
    $id: BigInt!,
    }
  ) {
deleteOneProjects (
    where: {
    id: $id,
    }
  ) } {
    assignee
    categories
    company
    considerworkingdays
    created_at
    cust_id
    customers
    doing
    done
    end_date
    file
    goal_collaborators
    goal_measurement
    goal_name
    goal_privacy
    goal_progress_source
    goal_timeperiod
    goal_updatemethod
    id
    method
    name
    priority
    product
    project_manager
    project_template
    resource
    section_rule
    staff_id
    start_date
    status
    tags
    task_id
    tasks
    team
    ticket_id
    ticketing
    type
    users
    websites
    workspaces
    zone
  }`
