const getRank = (sr) => {
  switch (true) {
    case (sr < 1500):
      return 1
      break;
    case (sr >= 1500 && sr < 2000):
      return 2
      break;
    case (sr >= 2000 && sr < 2500):
      return 3
      break;
    case (sr >= 2500 && sr < 3000):
      return 4
      break;
    case (sr >= 3000 && sr < 3500):
      return 5
      break;
    case (sr >= 3500 && sr < 4000):
      return 6
      break;
    case (sr > 4000):
      return 7
      break;
    default:
      return 0
  }
}

export { getRank }
