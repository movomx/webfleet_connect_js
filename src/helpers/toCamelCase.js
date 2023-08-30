const toCamelCase = snake_case_action => (
  snake_case_action.replace(/_([a-z])/g, (match) => match[1].toUpperCase())
)

module.exports = toCamelCase
