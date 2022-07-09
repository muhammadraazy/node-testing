import winston from "winston"

test("logging", () => {
    // level prop untuk level logging yang ingin di tampilkan
    const logger = winston.createLogger({
        level: "debug",
        transports: [
            new winston.transports.Console({})
        ]
    });

    // logger.log({ level: "error",message: "hello from error"})
    // logger.log({ level: "warn",message: "hello from warn"})
    // logger.log({ level: "info",message: "hello from info"})
    // logger.log({ level: "http",message: "hello from debug"})
    // logger.log({ level: "verbose",message: "hello from verbose"})
    // logger.log({ level: "debug",message: "hello from debug"})
    // logger.log({ level: "silly",message: "hello from silly"})

    logger.error("im error")
    logger.warn("im warn")
    logger.info("im info")
    logger.http("im http")
    logger.verbose("im verbose")
    logger.debug("im debug")
    logger.silly("im silly")
})