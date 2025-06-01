import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "react-feather";

import styles from "./FrequentlyAskedQuestions.module.css";

function FrequentlyAskedQuestions({ data }) {
  return (
    <Accordion.Root type="single" collapsible={true}>
      {data.map(({ id, question, answer }) => (
        <Accordion.Item key={id} value={id} className={styles.item}>
          <Accordion.Header>
            <Accordion.Trigger className={styles.trigger}>
              {question}
              <ChevronDown />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className={styles.content}>
            {answer}
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}

export default FrequentlyAskedQuestions;
